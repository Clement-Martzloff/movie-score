import { Request, Response, NextFunction } from 'express';
import { graphql } from 'graphql';
import Schema from '../movie-score.schema';
import { UserRepository } from '../../../modules/user/user.repository';

interface GraphqlRequestBody {
  query: string;
  variables?: { [key: string]: any };
  operationName?: string;
}

async function handleGraphqlRequest(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { body, user: rawUser } = req as {
      body: GraphqlRequestBody;
      user: any;
    };
    const me = await UserRepository.find(rawUser.id);
    const executionResult = await graphql(
      Schema,
      body.query,
      {},
      { next, user: me },
      body.variables
    );

    res.status(200);
    res.json(executionResult);
  } catch (error) {
    /**
     * Pass the error to the express error handling stack.
     */
    next(error);
  }
}

export default handleGraphqlRequest;
