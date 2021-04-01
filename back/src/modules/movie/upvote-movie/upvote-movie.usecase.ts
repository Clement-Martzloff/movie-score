import { UseCase } from '../../../base/usecase.base';
import { User } from '../../user/user.domain';
import { MovieRepository } from '../movie.repository';

import ensureMaxNotReached from '../ensure-max-movie-not-reached.usecase';
import ensureNotUpvoted from './ensure-movie-not-upvoted.usecase';
import writeUpvotedEvent from './write-movie-upvoted-event.usecase';
import writeRegisterCommand from './write-movie-register-command';

interface UpvoteMovieDTO {
  user: User;
  title: string;
}

const upvoteMovie: UseCase<UpvoteMovieDTO, void> = {
  async executeImpl(DTO) {
    const found = await MovieRepository.exists(DTO.title);

    if (found) {
      ensureNotUpvoted.executeImpl(DTO);
      ensureMaxNotReached.executeImpl(DTO);
      await writeUpvotedEvent.executeImpl(DTO);
    }

    if (!found) {
      await writeRegisterCommand.executeImpl(DTO);
    }
  }
};

export default upvoteMovie;
