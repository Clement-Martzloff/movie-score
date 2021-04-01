import { UseCase } from '../../../base/usecase.base';
import { User } from '../user.domain';
import { UserRepository } from '../user.repository';

import AppError from '../../../base/app.error';

interface GetUserDTO {
  id: string;
}

const getUser: UseCase<GetUserDTO, User> = {
  async executeImpl({ id }) {
    const foundUser = await UserRepository.find(id);

    if (foundUser !== undefined) {
      return foundUser;
    }
    throw new AppError('User not found.');
  }
};

export default getUser;
