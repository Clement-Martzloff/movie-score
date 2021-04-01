import Subscriber from '../../../base/subscriber.base';
import { Channel, Command } from '../../message-store/types';
import usecase from './register-movie.usecase';

const registerMovie: Subscriber = {
  async handle({ channel, payload }) {
    if (channel === Channel.MESSAGE_INSERTED) {
      const rawMessage = JSON.parse(payload);

      if (rawMessage.type === Command.REGISTER_MOVIE) {
        const { title, userInfoId } = rawMessage.data;

        try {
          await usecase.executeImpl({ title, userInfoId });
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
};

export default registerMovie;
