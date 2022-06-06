import fastify, { FastifyInstance } from 'fastify';
import { app } from './app';
import config from './core/config';
let fastifyInstance: FastifyInstance;

describe('Main app function load all routes', () => {
  beforeAll(async () => {
    fastifyInstance = await app(fastify(), { prefix: config.apiPrefix });
  });
  test('users routes', async () => {
    const res = await fastifyInstance.inject({
      url: `${config.apiPrefix}/users`,
    });
    expect(res.json()).toHaveLength(1);
  });
  test('auth routes all routes', async () => {
    const res = await fastifyInstance.inject({
      url: `${config.apiPrefix}/auth/local/login`,
      method: 'POST',
      payload: { email: 'test@example.com', password: 'test' },
    });
    expect(res.json()).toHaveProperty('name');
  });
});

describe('Main app function load only auth routes', () => {
  beforeAll(async () => {
    fastifyInstance = await app(fastify(), {
      prefix: config.apiPrefix,
      routes: ['AuthRoutes'],
    });
  });
  test('auth routes', async () => {
    const res = await fastifyInstance.inject({
      url: `${config.apiPrefix}/auth/local/login`,
      method: 'POST',
      payload: { email: 'test@example.com', password: 'test' },
    });
    expect(res.json()).toHaveProperty('name');
  });
  test('auth routes all routes', async () => {
    const res = await fastifyInstance.inject({
      url: `${config.apiPrefix}/users`,
    });
    expect(res.statusCode).toEqual(404);
  });
});
