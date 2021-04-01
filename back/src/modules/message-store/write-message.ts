import pool from '../../infra/node-postgres/pg.pool';

export interface Message {
  streamName: string;
  type: string;
  data: any;
}

export default async function writeMessage(message: Message) {
  const client = await pool.connect();
  const { streamName, type, data } = message;

  try {
    await client.query('BEGIN');
    await client.query(
      `
        INSERT INTO message_store
        VALUES(DEFAULT, $1, $2, $3, DEFAULT);
      `,
      [streamName, type, data]
    );
    await client.query('COMMIT');
  } catch (error) {
    client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}
