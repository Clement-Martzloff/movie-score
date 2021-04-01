import config from '../src/config';

config.publishers.forEach((p) => p.start());
config.expressAppServer.listen(config.expressAppPort, signalExpressAppStart);

function signalExpressAppStart() {
  console.log(`express-app::server listening port ${config.expressAppPort}...`);
}
