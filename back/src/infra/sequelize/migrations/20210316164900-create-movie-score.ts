import { QueryInterface } from 'sequelize';

export async function up(query: QueryInterface) {
  try {
    query.sequelize.query(
      `
        CREATE TABLE movie_score (
          id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
          title varchar(255) NOT NULL UNIQUE,
          score INTEGER NOT NULL,
          created_at TIMESTAMP NOT NULL DEFAULT now()
        );
      `
    );
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function down(query: QueryInterface) {
  try {
    query.sequelize.query(
      ` 
        DROP TABLE movie_score;
      `
    );
  } catch (e) {
    return Promise.reject(e);
  }
}
