import fastify from 'fastify';
import { app } from './app';
import config from './core/config';

(async function () {
  const server = fastify({
    logger: true,
  });
  await app(server, { prefix: config.apiPrefix });
  // Can be loaded only slected routes (for scalling public api or any)
  // await app(server, {routers: ['UserRoutes']});

  server.listen(8080, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
})();
