import { UseCase } from '../../../base/usecase.base';
import { User } from '../../user/user.domain';
import { Event } from '../../message-store/types';
import writeMessage from '../../message-store/write-message';

interface WriteUpvotedEventDTO {
  user: User;
  title: string;
}

const writeUpvotedEvent: UseCase<WriteUpvotedEventDTO, void> = {
  async executeImpl({ user, title }) {
    const upvotedEvent = {
      streamName: 'user-movie:event',
      type: Event.UPVOTED_MOVIE,
      data: { title, userInfoId: user.id }
    };

    await writeMessage(upvotedEvent);
  }
};

export default writeUpvotedEvent;
