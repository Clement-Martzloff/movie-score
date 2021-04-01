import { UseCase } from '../../../base/usecase.base';
import { MovieScore } from '../movie-score.domain';
import { MovieScoreRepository } from '../movie-score.repository';
import { MovieScoreFactory } from '../movie-score.domain';

interface GetMovieScore {
  title: string;
}

const getMovieScore: UseCase<GetMovieScore, MovieScore> = {
  async executeImpl({ title }) {
    const foundMovieScore = await MovieScoreRepository.findByTitle(title);

    if (foundMovieScore !== undefined) {
      return foundMovieScore;
    } else {
      const movieScore = MovieScoreFactory.create({
        score: 0,
        title: title
      });

      return movieScore;
    }
  }
};

export default getMovieScore;
