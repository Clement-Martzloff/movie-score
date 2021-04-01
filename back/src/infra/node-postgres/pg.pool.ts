import { Pool } from 'pg';
import env from '../../env';

const { pgDbUsername, pgDbHost, pgDbName, pgDbPassword } = env;
const pool = new Pool({
  user: pgDbUsername,
  host: pgDbHost,
  database: pgDbName,
  password: pgDbPassword,
  port: 5432,
  // log: (msg) => console.log(`[PG POOL] ${msg}`),
  /**
   * Number of milliseconds to wait before timing out when connecting a new client.
   * When the database is cold, time to establish a connection can be greater than 0 seconds.
   */
  connectionTimeoutMillis: 60000,
  /**
   * Maximum number of clients the pool should contain.
   */
  max: 50
});

export default pool;
