import { UseCase } from '../../../base/usecase.base';
import { MovieScore } from '../movie-score.domain';
import { MovieScoreRepository } from '../movie-score.repository';
import UserValidationError from '../../user/user-validation-error';

const getTop3MovieScores: UseCase<undefined, MovieScore[] | void> = {
  async executeImpl() {
    const foundMovieScores = await MovieScoreRepository.getFirstThreeByScore();

    if (foundMovieScores === undefined) {
    } else {
      throw new UserValidationError("you haven't voted for a movie yet.");
    }
  }
};

export default getTop3MovieScores;
