import { Client } from 'pg';
import env from '../../env';

const { pgDbUsername, pgDbHost, pgDbName, pgDbPassword } = env;
const config = {
  user: pgDbUsername,
  host: pgDbHost,
  database: pgDbName,
  password: pgDbPassword,
  port: 5432,
  /**
   * Number of milliseconds to wait before timing out when connecting a new client.
   * When the database is cold, time to establish a connection can be greater than 0 seconds.
   */
  connectionTimeoutMillis: 60000
};

export default function build() {
  let clientInstance: Client | null = null;

  if (clientInstance === null) {
    const client = new Client(config);

    clientInstance = client;
  }

  return clientInstance;
}
