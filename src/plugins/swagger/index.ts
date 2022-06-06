import { FastifyPluginAsync } from 'fastify';
import swagger from '@fastify/swagger';

export const SwaggerPlugin: FastifyPluginAsync = async (
  fastify,
): Promise<void> => {
  fastify.register(swagger, {
    mode: 'dynamic',
    routePrefix: 'api-docs',
    exposeRoute: true,
    hideUntagged: false,
    swagger: {
      info: {
        title: 'Test swagger',
        description: 'Testing the Fastify swagger API',
        version: '0.1.0',
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here',
      },
      host: '127.0.0.1:8080',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
    },
  });
};
