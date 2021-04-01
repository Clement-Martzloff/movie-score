import env from '../../../env';

const { pgDbUsername, pgDbPassword, pgDbName, pgDbHost } = env;
const dev = {
  username: pgDbUsername,
  password: pgDbPassword,
  database: pgDbName,
  host: pgDbHost,
  dialect: 'postgres'
};

const preprod = dev;
const prod = dev;
const test = dev;
const config: { [k: string]: any } = { dev, preprod, prod, test };

// this line is only here for the migration process of the sequelize-cli
export { dev, preprod, prod, test };
