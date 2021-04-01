import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';

import env from '../../../env';
import { UseCase } from '../../../base/usecase.base';
import { GetTokenDTO } from '../identity.dto';
import { UserRepository } from '../../user/user.repository';

import UserValidationError from '../../user/user-validation-error';

const getToken: UseCase<GetTokenDTO, string | void> = {
  async executeImpl({ email, password }) {
    const foundUser = await UserRepository.findByEmail(email);

    if (foundUser) {
      const valid = await bcrypt.compare(password, foundUser.passwordHash);

      if (!valid) {
        throw new UserValidationError('Incorrect password.');
      }

      return jsonwebtoken.sign({ id: foundUser.id }, env.jwtSecret, {
        expiresIn: '1d',
        algorithm: 'HS256'
      });
    }

    if (!foundUser) {
      throw new UserValidationError('User not found.');
    }
  }
};

export default getToken;
