import { QueryInterface } from 'sequelize';

export async function up(query: QueryInterface) {
  try {
    query.sequelize.query(
      `
        CREATE TRIGGER message_inserted AFTER INSERT 
          ON message_store
        FOR EACH ROW 
        EXECUTE PROCEDURE notify_message_inserted()
      `
    );
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function down(query: QueryInterface) {
  try {
    await query.sequelize.query(
      `
        DROP TRIGGER message_inserted ON message_store;
      `
    );
  } catch (e) {
    return Promise.reject(e);
  }
}
