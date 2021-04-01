import { ErrorName } from '../base/error-name.base';

export default class AppError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = ErrorName.APP_ERROR;
    Error.captureStackTrace(this, this.constructor);
    Object.setPrototypeOf(this, AppError.prototype);
  }
}
