import { List, ListFactory } from '../../base/list.base';
import { Movie } from './movie.domain';

export namespace MovieListFactory {
  export function create(movies?: Movie[]): MovieList {
    return {
      ...ListFactory.create(movies)
    };
  }
}

export interface MovieList extends List<Movie> {}
