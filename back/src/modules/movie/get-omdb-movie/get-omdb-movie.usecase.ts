import { UseCase } from '../../../base/usecase.base';
import { OmdbMovie } from '../omdb-movie.domain';
import { OmdbMovieMap } from '../omdb-movie.mapper';
import { OmdbApiService } from '../../../infra/omdb-api/omdb-service';

interface GetOmdbMovie {
  imdbId: string;
}

const getOmdbMovie: UseCase<GetOmdbMovie, OmdbMovie> = {
  async executeImpl({ imdbId }) {
    const rawOmdbMovie = await OmdbApiService.findByImdbId(imdbId);
    const ombdMovie = OmdbMovieMap.toDomain(rawOmdbMovie);

    return ombdMovie;
  }
};

export default getOmdbMovie;
