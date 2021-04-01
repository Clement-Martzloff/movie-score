import bcrypt from 'bcrypt';
import { User, UserFactory } from '../../user/user.domain';
import { UseCase } from '../../../base/usecase.base';
import { RegisterMeDTO } from '../identity.dto';
import { UserRepository } from '../../user/user.repository';

const registerUser: UseCase<RegisterMeDTO, User> = {
  async executeImpl({ email, password }) {
    /**@todo Check if user already created */
    const passwordHash = await bcrypt.hash(password, 10);
    const user = UserFactory.create({ email, passwordHash });

    await UserRepository.save(user);

    return user;
  }
};

export default registerUser;
