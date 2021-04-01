import { UseCase } from '../../../base/usecase.base';
import { User } from '../../user/user.domain';

import UserValidationError from '../../user/user-validation-error';

interface EnsureNotUpvotedDTO {
  user: User;
  title: string;
}

const ensureNotUpvoted: UseCase<EnsureNotUpvotedDTO, void> = {
  executeImpl({ user, title }) {
    const alreadyUpvotedMovie = user.movies
      .getCurrentItems()
      .filter((movie) => movie.title === title);

    if (alreadyUpvotedMovie.length > 0) {
      throw new UserValidationError('Movie already upvoted.');
    }
  }
};

export default ensureNotUpvoted;
