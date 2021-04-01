import { Router } from 'express';
import handleGraphqlRequest from '../middlewares/handle-graphql-request.middleware';
import authenticate from '../middlewares/authenticate.middleware';

const router = Router();

router.post('/graphql', authenticate, handleGraphqlRequest);

export { router };
