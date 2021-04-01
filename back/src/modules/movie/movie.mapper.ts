import { Movie, MovieFactory } from './movie.domain';

export namespace MovieMap {
  export function toDomain(raw: any): Movie {
    return MovieFactory.create({ ...createMovieprops(raw) }, raw.id);
  }

  export function toPostgres(Movie: Movie): any {
    return createRawMovieProps(Movie);
  }
}

function createMovieprops(raw: any) {
  return {
    userInfoId: raw.user_info_id,
    title: raw.title,
    createdAt: raw.created_at
  };
}

function createRawMovieProps(Movie: Movie) {
  return {
    userInfoId: Movie.userInfoId,
    title: Movie.title
  };
}
