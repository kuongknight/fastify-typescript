import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';
import { SwaggerPlugin } from './plugins/swagger';
import * as routes from './routes';

type RouteKeys = keyof typeof routes;

export type AppOptions = {
  routes?: RouteKeys[];
  prefix?: string;
};

type AppBuilder = (
  fastify: FastifyInstance,
  opts: AppOptions,
  next?: () => void,
) => Promise<FastifyInstance>;

export const app: AppBuilder = async (fastify, opts) => {
  // Register routes and plugins by ordering
  await fastify.register(fp(SwaggerPlugin), { prefix: opts.prefix });

  const shouldLoadRoutes = opts.routes || Object.keys(routes);
  for (const routeKey of shouldLoadRoutes) {
    await fastify.register(routes[routeKey], { prefix: opts.prefix });
  }
  await fastify.ready();
  return fastify;
};
