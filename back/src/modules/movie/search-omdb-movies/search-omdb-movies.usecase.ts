import { UseCase } from '../../../base/usecase.base';
import { OmdbMovie } from '../omdb-movie.domain';

import { OmdbApiService } from '../../../infra/omdb-api/omdb-service';
import { OmdbMovieMap } from '../omdb-movie.mapper';

interface SearchOmdbMovieDTO {
  term: string;
  pageNumber: string;
}

const searchOmdbMovie: UseCase<
  SearchOmdbMovieDTO,
  { tenOmdbMovies: OmdbMovie[]; totalResultsArrayLength: number }
> = {
  async executeImpl({ term, pageNumber }) {
    const { Search, totalResults } = await OmdbApiService.searchPaginatedMovies(
      term,
      pageNumber
    );
    const tenOmdbMovies = Search.map(OmdbMovieMap.toDomain);

    return {
      tenOmdbMovies,
      /**
       * We assume we can find the length of the array like this.
       */
      totalResultsArrayLength: (() => parseInt(totalResults, 10) - 1)()
    };
  }
};

export default searchOmdbMovie;
