import { Router } from 'express';
import registerMe from '../../../modules/identity/register-me/register-me.controller';
import getToken from '../../../modules/identity/get-token/get-token.controller';

const router = Router();

router.post('/signup', registerMe);
router.post('/signin', getToken);

export { router };
