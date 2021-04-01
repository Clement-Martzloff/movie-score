import { MovieScore, MovieScoreFactory } from './movie-score.domain';

export namespace MovieScoreMap {
  export function toDomain(raw: any): MovieScore {
    return MovieScoreFactory.create({ ...createMovieScoreprops(raw) }, raw.id);
  }

  export function toPostgres(Movie: MovieScore): any {
    return createRawMovieScoreProps(Movie);
  }
}

function createMovieScoreprops(raw: any) {
  return {
    title: raw.title,
    score: raw.score,
    createdAt: raw.created_at
  };
}

function createRawMovieScoreProps(MovieScore: MovieScore) {
  return {
    title: MovieScore.title,
    score: MovieScore.score
  };
}
