import { red } from 'colors/safe';
import packageJson from '../package.json';

export default {
  environment: requireFromEnv('NODE_ENV'),
  pgDbPassword: requireFromEnv('POSTGRES_DB_PASSWORD'),
  pgDbUsername: requireFromEnv('POSTGRES_DB_USERNAME'),
  pgDbName: requireFromEnv('POSTGRES_DB_NAME'),
  pgDbHost: requireFromEnv('POSTGRES_DB_HOST'),
  redisHost: requireFromEnv('REDIS_PUBSUB_HOST'),
  redisPort: parseInt(requireFromEnv('REDIS_PUBSUB_PORT'), 10),
  omdbApiUrl: requireFromEnv('OMDB_API_URL'),
  omdbApiKey: requireFromEnv('OMDB_API_KEY'),
  jwtSecret: requireFromEnv('JWT_SECRET'),
  version: packageJson.version
};

function requireFromEnv(key: string): string {
  if (!process.env[key]) {
    console.error(`${red('[BACK ERROR] Missing env variable:')} ${key}`);

    return process.exit(1);
  }

  return process.env[key]!;
}
