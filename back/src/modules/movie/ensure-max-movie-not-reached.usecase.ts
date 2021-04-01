import { UseCase } from '../../base/usecase.base';
import { Invariant, User } from '../user/user.domain';

import UserValidationError from '../user/user-validation-error';

interface EnsureMaxNotReached {
  user: User;
}

const ensureMaxNotReached: UseCase<EnsureMaxNotReached, void> = {
  executeImpl({ user }) {
    let movieCount = user.movies.getCurrentItems().length;

    movieCount++;

    if (movieCount > Invariant.MAX_MOVIE_THRESHOLD) {
      throw new UserValidationError(
        'You cannot vote for more than three movies.'
      );
    }
  }
};

export default ensureMaxNotReached;
