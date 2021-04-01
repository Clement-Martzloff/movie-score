process.env.NODE_ENV = 'test';
process.env.POSTGRES_DB_PASSWORD = 'password';
process.env.POSTGRES_DB_USERNAME = 'username';
process.env.POSTGRES_DB_NAME = 'db-name';
process.env.POSTGRES_DB_HOST = 'host';
process.env.REDIS_PUBSUB_HOST = 'host';
process.env.REDIS_PUBSUB_PORT = '6379';
process.env.OMDB_API_URL = 'url';
process.env.OMDB_API_KEY = 'key';
process.env.JWT_SECRET = 'secret';

module.exports = {
  verbose: true,
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },
  testEnvironment: 'node',
  testRegex: '.*\\.(test|spec)?\\.(ts|ts)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  roots: ['<rootDir>']
};
