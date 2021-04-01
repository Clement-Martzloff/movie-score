import pool from '../../infra/node-postgres/pg.pool';
import { User } from './user.domain';
import { UserMap } from './user.mapper';
import { MovieList } from '../movie/movie-list.domain';
import { MovieRepository } from '../movie/movie.repository';

export namespace UserRepository {
  export async function find(id: string): Promise<User | undefined> {
    const { rowCount, rows } = await pool.query(
      `
        SELECT *
          FROM user_info
          WHERE id=$1;
      `,
      [id]
    );

    if (rowCount !== 0) {
      const movies = await MovieRepository.findUserMovies(id);

      return UserMap.toDomain({ ...rows[0], movies });
    }

    return undefined;
  }

  export async function findByEmail(email: string): Promise<User | undefined> {
    const { rows } = await pool.query(
      `
        SELECT *
          FROM user_info
          WHERE email=$1;
      `,
      [email]
    );

    return UserMap.toDomain(rows[0]);
  }

  export async function save(user: User): Promise<void> {
    const found = await exists(user.email);
    const { email, password_hash } = UserMap.toPostgres(user);

    if (found) {
      await saveMovies(user.movies);
    }

    if (!found) {
      const client = await pool.connect();

      try {
        await client.query('BEGIN');
        await client.query(
          `
            INSERT INTO user_info 
            VALUES(DEFAULT, $1, $2, DEFAULT);
          `,
          [email, password_hash]
        );
        await client.query('COMMIT');
        await saveMovies(user.movies);
      } catch (error) {
        client.query('ROLLBACK');

        throw error;
      } finally {
        client.release();
      }
    }
  }
}

async function exists(email: string): Promise<boolean> {
  const { rows } = await pool.query(
    `
      SELECT * 
        FROM user_info
        WHERE email=$1;
    `,
    [email]
  );

  return rows.length !== 0;
}

async function saveMovies(movies: MovieList) {
  await MovieRepository.saveBulk(movies.getNewItems());
}
