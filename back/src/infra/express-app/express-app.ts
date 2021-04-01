import express from 'express';
import morgan from 'morgan';
import handleDevError from 'errorhandler';
import cors from 'cors';
import handleError from './middlewares/handle-error.middleware';
import ensureOriginIsWhiteListed from './ensure-origin-is-white-listed';
import env from '../../env';
import { router as rootRoutes } from './routes/root.route';

const expressApp = express();
const { environment } = env;

export default expressApp;

/**
 * HTTP request logger middleware.
 */
expressApp.use(morgan('short'));
/**
 * Parse incoming request bodies with JSON payload.
 */
expressApp.use(express.json());
/**
 * Some security measures.
 */
expressApp.disable('x-powered-by');
expressApp.use(cors(ensureOriginIsWhiteListed));
/**
 * Mount all the routes.
 */
expressApp.use(rootRoutes);

if (environment === 'dev') {
  /**
   * Only use in development.
   */
  expressApp.use(handleDevError());
} else {
  expressApp.use(handleError);
}
