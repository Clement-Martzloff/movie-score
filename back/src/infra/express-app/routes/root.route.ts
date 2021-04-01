import { Router } from 'express';
import { router as identityRouter } from './identity.route';
import { router as graphqlRouter } from './graphql.route';

const router = Router();

router.use(identityRouter);
router.use(graphqlRouter);

export { router };
