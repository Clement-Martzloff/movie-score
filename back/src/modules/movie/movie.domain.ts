import { Entity, EntityFactory } from '../../base/entity.base';

export namespace MovieFactory {
  export function create(props: MovieProps, id?: string): Movie {
    return {
      ...EntityFactory.create(id),
      userInfoId: props.userInfoId,
      title: props.title,
      createdAt: props.createdAt
    };
  }
}

export interface Movie extends Entity, MovieProps {}

interface MovieProps {
  userInfoId: string;
  title: string;
  createdAt?: Date | string;
}
