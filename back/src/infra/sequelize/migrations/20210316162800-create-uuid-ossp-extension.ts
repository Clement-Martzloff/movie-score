import { QueryInterface } from 'sequelize';

export async function up(query: QueryInterface) {
  try {
    query.sequelize.query(
      `
        CREATE EXTENSION "uuid-ossp";
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
        DROP EXTENSION "uuid-ossp";
      `
    );
  } catch (e) {
    return Promise.reject(e);
  }
}
