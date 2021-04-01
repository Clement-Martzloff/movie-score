import { Entity, EntityFactory } from '../../base/entity.base';

export namespace OmdbMovieFactory {
  export function create(props: OmdbMovieProps, id?: string): OmdbMovie {
    return {
      ...EntityFactory.create(id),
      title: props.title,
      year: props.year,
      imdbId: props.imdbId,
      type: props.type,
      posterUrl: props.posterUrl
    };
  }
}

export interface OmdbMovie extends Entity, OmdbMovieProps {}

interface OmdbMovieProps {
  title: string;
  year: string;
  imdbId: string;
  type: string;
  posterUrl: string;
}
