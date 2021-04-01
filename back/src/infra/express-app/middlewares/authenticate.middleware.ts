import jwt from 'express-jwt';
import env from '../../../env';

const authenticate = jwt({
  secret: env.jwtSecret,
  credentialsRequired: true,
  algorithms: ['HS256']
});

export default authenticate;
