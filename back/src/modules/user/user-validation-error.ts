import { ErrorName } from '../../base/error-name.base';

export default class UserValidationError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = ErrorName.USER_VALIDATION;
    Error.captureStackTrace(this, this.constructor);
    Object.setPrototypeOf(this, UserValidationError.prototype);
  }
}
