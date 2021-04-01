import { Request } from 'express';
import { CorsOptions } from 'cors';

const allowedOrigins = ['http://localhost:3000'];

/**
 * CORS is just a browser concept and not a strong security mechanism.
 * The backend server (!) needs to set appropriate headers on the response
 * it sends back to the frontend.
 * Browser check those response headers and block the client-app from using
 * the response if such headers should not be set - and by default they aren’t.
 */
export default function delegateCorsOptions(
  req: Request,
  callback: (err: Error | null, options?: CorsOptions) => void
): void {
  const corsOptions = { origin: false };
  const origin = req.header('Origin');

  if (origin && allowedOrigins.indexOf(origin) !== -1) {
    corsOptions.origin = true;
  }

  callback(null, corsOptions);
}
