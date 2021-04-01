import { Request, Response, NextFunction } from 'express';
import handleError from '../src/infra/express-app/middlewares/handle-error.middleware';
import UserValidationError from '../src/modules/user/user-validation-error';
import AppError from '../src/base/app.error';

const requestMock: any = {};
const responseMock: any = { status: jest.fn(), json: jest.fn() };
const nextMock = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
});

describe('The Error handler :', () => {
  it("Should send the error message if the status isn't 500.", () => {
    const error = new UserValidationError('user error');

    handleError(
      error,
      requestMock as Request,
      responseMock as Response,
      nextMock as NextFunction
    );

    expect(responseMock.status).toHaveBeenNthCalledWith(1, 400);
    expect(responseMock.json).toHaveBeenNthCalledWith(1, {
      message: 'user error'
    });
  });

  it("Shouldn't send the error message if the status is 500.", () => {
    const error = new AppError('app error');

    handleError(
      error,
      requestMock as Request,
      responseMock as Response,
      nextMock as NextFunction
    );

    expect(responseMock.status).toHaveBeenNthCalledWith(1, 500);
    expect(responseMock.json).toHaveBeenNthCalledWith(1, {
      message: null
    });
  });
});
