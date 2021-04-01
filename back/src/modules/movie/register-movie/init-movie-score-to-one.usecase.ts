import { UseCase } from '../../../base/usecase.base';
import { Movie } from '../movie.domain';
import { MovieScoreFactory } from '../movie-score.domain';
import { MovieScoreRepository } from '../movie-score.repository';

interface InitScoreToOneDTO {
  movie: Movie;
}

const initMovieScoreToOne: UseCase<InitScoreToOneDTO, void> = {
  async executeImpl({ movie }) {
    const movieScore = MovieScoreFactory.create({
      title: movie.title,
      score: 1
    });

    await MovieScoreRepository.save(movieScore);
  }
};

export default initMovieScoreToOne;
