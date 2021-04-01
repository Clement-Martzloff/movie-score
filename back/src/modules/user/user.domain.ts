import { Entity, EntityFactory } from '../../base/entity.base';
import { MovieList, MovieListFactory } from '../movie/movie-list.domain';

export enum Invariant {
  MAX_MOVIE_THRESHOLD = 3
}

export namespace UserFactory {
  export function create(props: UserProps, id?: string): User {
    return {
      ...EntityFactory.create(id),
      email: props.email,
      passwordHash: props.passwordHash,
      movies: props.movies ?? MovieListFactory.create([]),
      createdAt: props.createdAt
    };
  }
}

export interface User extends Entity, UserProps {
  movies: MovieList;
}

interface UserProps {
  email: string;
  passwordHash: string;
  movies?: MovieList;
  createdAt?: Date | string;
}
