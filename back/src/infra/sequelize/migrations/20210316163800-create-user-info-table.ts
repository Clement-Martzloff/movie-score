import { QueryInterface } from 'sequelize';

export async function up(query: QueryInterface) {
  try {
    query.sequelize.query(
      `
        CREATE TABLE user_info (
          id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
          email varchar(255) NOT NULL UNIQUE,
          password_hash varchar(255) NOT NULL,
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
        DROP TABLE user_info CASCADE;
      `
    );
  } catch (e) {
    return Promise.reject(e);
  }
}
