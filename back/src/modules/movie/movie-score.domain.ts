import { Entity, EntityFactory } from '../../base/entity.base';

export namespace MovieScoreFactory {
  export function create(props: MovieScoreProps, id?: string): MovieScore {
    return {
      ...EntityFactory.create(id),
      title: props.title,
      score: props.score,
      createdAt: props.createdAt
    };
  }
}

export interface MovieScore extends Entity, MovieScoreProps {}

interface MovieScoreProps {
  title: string;
  score: number;
  createdAt?: Date | string;
}
