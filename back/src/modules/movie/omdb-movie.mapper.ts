import { OmdbMovie, OmdbMovieFactory } from './omdb-movie.domain';

export namespace OmdbMovieMap {
  export function toDomain(raw: any): OmdbMovie {
    return OmdbMovieFactory.create({ ...createOmdbMovieprops(raw) }, raw.id);
  }
}

function createOmdbMovieprops(raw: any) {
  return {
    title: raw.Title,
    year: raw.Year,
    imdbId: raw.imdbID,
    type: raw.Type,
    posterUrl: raw.Poster
  };
}
