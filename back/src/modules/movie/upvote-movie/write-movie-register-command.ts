import { UseCase } from '../../../base/usecase.base';
import { User } from '../../user/user.domain';
import { Command } from '../../message-store/types';
import writeMessage from '../../message-store/write-message';

interface WriteRegisterCommandDTO {
  user: User;
  title: string;
}

const writeRegisterCommand: UseCase<WriteRegisterCommandDTO, void> = {
  async executeImpl({ user, title }) {
    const registerCommand = {
      streamName: `user-movie:command-${user.id}`,
      type: Command.REGISTER_MOVIE,
      data: { title, userInfoId: user.id }
    };

    await writeMessage(registerCommand);
  }
};

export default writeRegisterCommand;
