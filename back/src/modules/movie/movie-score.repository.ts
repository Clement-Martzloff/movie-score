import pool from '../../infra/node-postgres/pg.pool';
import { MovieScore } from './movie-score.domain';
import { MovieScoreMap } from './movie-score-mapper';

export namespace MovieScoreRepository {
  export async function findByTitle(
    title: string
  ): Promise<MovieScore | undefined> {
    const { rowCount, rows } = await pool.query(
      `
        SELECT * 
          FROM movie_score
          WHERE title=$1;
      `,
      [title]
    );

    if (rowCount > 0) {
      return MovieScoreMap.toDomain(rows[0]);
    }

    return undefined;
  }

  export async function getFirstThreeByScore(): Promise<
    MovieScore[] | undefined
  > {
    const { rowCount, rows } = await pool.query(
      `
        SELECT * 
          FROM movie_score
          ORDER BY score ASC
          LIMIT 3;
      `
    );

    if (rowCount > 0) {
      return rows.map(MovieScoreMap.toDomain);
    }

    return undefined;
  }

  export async function update(movieScore: MovieScore) {
    const { title, score } = MovieScoreMap.toPostgres(movieScore);
    const client = await pool.connect();

    try {
      await client.query('BEGIN');
      await client.query(
        `
          UPDATE movie_score SET score=$2
            WHERE title=$1;
        `,
        [title, score]
      );
      await client.query('COMMIT');
    } catch (error) {
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }

  export async function save(movieScore: MovieScore) {
    const { title, score } = MovieScoreMap.toPostgres(movieScore);
    const client = await pool.connect();

    try {
      await client.query('BEGIN');
      await client.query(
        `
          INSERT INTO movie_score 
          VALUES(DEFAULT, $1, $2, DEFAULT);
        `,
        [title, score]
      );
      await client.query('COMMIT');
    } catch (error) {
      client.query('ROLLBACK');
    } finally {
      client.release();
    }
  }
}
