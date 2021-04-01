import pool from '../../infra/node-postgres/pg.pool';
import { Movie } from '../movie/movie.domain';
import { MovieMap } from '../movie/movie.mapper';

export namespace MovieRepository {
  export async function exists(title: string): Promise<boolean> {
    const { rowCount } = await pool.query(
      `
        SELECT * 
          FROM user_movie
          WHERE title=$1;
      `,
      [title]
    );

    if (rowCount > 0) {
      return true;
    }

    return false;
  }

  export async function findUserMovies(userInfoId: string): Promise<Movie[]> {
    const { rows } = await pool.query(
      `
        SELECT * 
          FROM user_movie
          WHERE user_info_id=$1;
      `,
      [userInfoId]
    );

    return rows.map(MovieMap.toDomain);
  }

  export async function saveBulk(movies: Movie[]): Promise<void> {
    const promises = movies.map(save);

    await Promise.all(promises);
  }

  export async function save(movie: Movie): Promise<void> {
    const found = await exists(movie.id);
    const { userInfoId, title } = MovieMap.toPostgres(movie);

    if (!found) {
      const client = await pool.connect();

      try {
        await client.query('BEGIN');
        await client.query(
          `
            INSERT INTO user_movie 
            VALUES(DEFAULT, $1, $2, DEFAULT);
          `,
          [userInfoId, title]
        );
        await client.query('COMMIT');
      } catch (error) {
        client.query('ROLLBACK');
      } finally {
        client.release();
      }
    }
  }
}
