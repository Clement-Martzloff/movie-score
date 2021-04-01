import { v4 } from 'uuid';

export namespace EntityFactory {
  export function create(id?: string): Entity {
    return {
      id: id ? id : v4(),
      equals: function (b?: Entity): boolean {
        return equals(this, b);
      }
    };
  }
}

export interface Entity {
  id: string;
  equals: (b?: Entity) => boolean;
}

function equals(a: Entity, b?: Entity): boolean {
  if (b === undefined) {
    return false;
  }

  if (Object.is(a, b)) {
    return true;
  }

  if (!isEntity(b)) {
    return false;
  }

  return a.id === b.id;
}

function isEntity(v: any): v is Entity {
  return (v as Entity).id !== undefined;
}
