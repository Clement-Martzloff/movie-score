import { Request, Response, NextFunction } from 'express';
import { ErrorName } from '../../../base/error-name.base';

function handleError(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const status = err.name === ErrorName.APP_ERROR ? 500 : 400;

  res.status(status);
  res.json({
    message: status === 500 ? null : err.message
  });
}

export default handleError;
