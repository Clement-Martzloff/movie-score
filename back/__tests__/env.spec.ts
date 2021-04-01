import env from '../src/env';

describe('Import the env file :', () => {
  it('Should be used to access to all the environment variables of the api.', () => {
    expect(env.environment).toBe('test');
    expect(env.pgDbPassword).toBe('password');
    expect(env.pgDbUsername).toBe('username');
    expect(env.pgDbName).toBe('db-name');
    expect(env.pgDbHost).toBe('host');
    expect(env.redisHost).toBe('host');
    expect(env.redisPort).toBe(6379);
    expect(env.omdbApiUrl).toBe('url');
    expect(env.omdbApiKey).toBe('key');
    expect(env.jwtSecret).toBe('secret');
    expect(env.version).toBe('1.0.0');
  });
});
