import { QueryInterface } from 'sequelize';

export async function up(query: QueryInterface) {
  try {
    query.sequelize.query(
      `
        CREATE TABLE user_movie (
          id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
          user_info_id UUID NOT NULL CONSTRAINT user_info_id_fkey REFERENCES user_info ON DELETE CASCADE,
          title varchar(255) NOT NULL,
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
        DROP TABLE user_movie CASCADE;
      `
    );
  } catch (e) {
    return Promise.reject(e);
  }
}
