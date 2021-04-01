import { Request, Response, NextFunction } from 'express';
import useCase from './get-token.usecase';

async function execute(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { body } = req;

    const token = await useCase.executeImpl({
      email: body.email,
      password: body.password
    });

    res.status(200);
    res.json({ token });
  } catch (error) {
    /**
     * Pass the error to the express error handling stack.
     */
    next(error);
  }
}

export default execute;
