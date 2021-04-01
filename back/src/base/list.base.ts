import { Entity } from './entity.base';

export namespace ListFactory {
  export function create<E extends Entity>(items?: E[]): List<E> {
    const initials = items ?? [];
    const currents = initials ?? [];
    const news: E[] = [];

    return {
      add: function (item) {
        if (!isNewItem(item) && !isInitialItem(item)) {
          news.push(item);
        }

        if (!isCurrentItem(item)) {
          currents.push(item);
        }
      },
      getCurrentItems: function () {
        return currents;
      },
      getNewItems: function () {
        return news;
      }
    };

    function isNewItem(item: E): boolean {
      return news.filter((n) => compareItems(item, n)).length !== 0;
    }

    function isInitialItem(item: E): boolean {
      return initials.filter((i) => compareItems(item, i)).length !== 0;
    }

    function isCurrentItem(item: E): boolean {
      return currents.filter((c) => compareItems(item, c)).length !== 0;
    }

    function compareItems(a: E, b: E): boolean {
      return a.equals(b);
    }
  }
}

export interface List<E> {
  add: (item: E) => void;
  getCurrentItems: () => E[];
  getNewItems: () => E[];
}
