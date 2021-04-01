import { QueryInterface } from 'sequelize';

export async function up(query: QueryInterface) {
  try {
    query.sequelize.query(
      `
        CREATE TABLE message_store (
          id UUID NOT NULL PRIMARY KEY DEFAULT uuid_generate_v4(),
          stream_name varchar(255) NOT NULL,
          type varchar(255) NOT NULL,
          data JSONB,
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
        DROP TABLE message_store;
      `
    );
  } catch (e) {
    return Promise.reject(e);
  }
}
