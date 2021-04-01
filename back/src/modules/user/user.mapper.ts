import { User, UserFactory } from './user.domain';
import { Movie } from '../movie/movie.domain';
import { MovieListFactory } from '../movie/movie-list.domain';

export namespace UserMap {
  export function toDomain(raw: any): User {
    return UserFactory.create({ ...createUserprops(raw) }, raw.id);
  }

  export function toPostgres(User: User): any {
    return createRawUserProps(User);
  }
}

function createUserprops(raw: any) {
  return {
    email: raw.email,
    passwordHash: raw.password_hash,
    createdAt: raw.created_at,
    movies: getMovieList()
  };

  function getMovieList() {
    if (raw.movies) {
      return MovieListFactory.create(raw.movies);
    }
  }
}

function createRawUserProps(user: User) {
  return {
    email: user.email,
    password_hash: user.passwordHash
  };
}
