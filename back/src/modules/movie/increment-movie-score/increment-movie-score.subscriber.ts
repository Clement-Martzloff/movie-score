import Subscriber from '../../../base/subscriber.base';
import { Channel, Event } from '../../message-store/types';
import usecase from './increment-movie-score.usecase';

const incrementMovieScore: Subscriber = {
  async handle({ channel, payload }) {
    if (channel === Channel.MESSAGE_INSERTED) {
      const rawMessage = JSON.parse(payload);

      if (rawMessage.type === Event.UPVOTED_MOVIE) {
        const { title } = rawMessage.data;

        try {
          await usecase.executeImpl({ title });
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
};

export default incrementMovieScore;
