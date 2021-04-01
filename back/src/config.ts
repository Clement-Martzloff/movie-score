import { Server } from 'http';

import env from './env';
import expressApp from './infra/express-app/express-app';

import createPgClient from './infra/node-postgres/pg.client';
import createPgMessagePublisher from './modules/message-store/message.publisher';
import registerMovieSubscriber from './modules/movie/register-movie/register-movie.subscriber';
import incrementMovieScoreSubscriber from './modules/movie/increment-movie-score/increment-movie-score.subscriber';

/**
 * Consider using HTTPS in production.
 * e.g configure a cloudfront CDN to redirect HTTP to HTTPS.
 * @see https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html
 */
const expressAppServer = new Server(expressApp);
const pgMessagePublisher = createPgMessagePublisher({
  client: createPgClient()
});

pgMessagePublisher.subscribe(registerMovieSubscriber);
pgMessagePublisher.subscribe(incrementMovieScoreSubscriber);

export default {
  env,
  expressAppPort: 4000,
  expressAppServer,
  publishers: [pgMessagePublisher]
};
