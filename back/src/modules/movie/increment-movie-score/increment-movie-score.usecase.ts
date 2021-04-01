import { UseCase } from '../../../base/usecase.base';
import { MovieScoreRepository } from '../movie-score.repository';
import AppError from '../../../base/app.error';

interface IncrementMovieScoreDTO {
  title: string;
}

const incrementMovieScore: UseCase<IncrementMovieScoreDTO, void> = {
  async executeImpl({ title }) {
    const foundMovieScore = await MovieScoreRepository.findByTitle(title);

    if (foundMovieScore !== undefined) {
      foundMovieScore.score++;

      await MovieScoreRepository.update(foundMovieScore);
    } else {
      throw new AppError('Movie score not found.');
    }
  }
};

export default incrementMovieScore;
