import {
  Connection,
  cursorToOffset,
  offsetToCursor,
  getOffsetWithDefault
} from 'graphql-relay';
import { OmdbMovie } from '../omdb-movie.domain';
import usecase from './search-omdb-movies.usecase';

async function execute(
  source: any,
  args: { [argName: string]: any },
  context: any
): Promise<Connection<OmdbMovie> | void> {
  const { term, first, after, before, last } = args;

  try {
    let pageNumber = '1';
    const sliceStart = 0;

    /** LoadNext, refetch... */
    if (after !== null) {
      /**
       * OmdbApi only allows us to paginate with ten elements per page.
       * Remember you want the NEXT page number after the last current page cursor.
       */
      pageNumber = Math.round(cursorToOffset(after) / 10 + 1).toString();
    }

    const {
      tenOmdbMovies,
      totalResultsArrayLength
    } = await usecase.executeImpl({
      term,
      pageNumber
    });
    const sliceEnd = sliceStart + totalResultsArrayLength;
    const beforeOffset = getOffsetWithDefault(before, totalResultsArrayLength);
    const afterOffset = getOffsetWithDefault(after, -1);
    const startOffset = Math.max(sliceStart - 1, afterOffset, -1) + 1;
    const endOffset = Math.min(sliceEnd, beforeOffset, totalResultsArrayLength);
    const edges = tenOmdbMovies.map((omdbMovie, index) => ({
      node: omdbMovie,
      cursor: offsetToCursor(startOffset + index)
    }));
    const firstEdge = edges[0];
    const lastEdge = edges[edges.length - 1];
    const lowerBound = after != null ? afterOffset + 1 : 0;
    const upperBound = before != null ? beforeOffset : totalResultsArrayLength;

    return {
      edges,
      pageInfo: {
        startCursor: firstEdge ? firstEdge.cursor : null,
        endCursor: lastEdge ? lastEdge.cursor : null,
        hasPreviousPage:
          typeof last === 'number' ? startOffset > lowerBound : false,
        hasNextPage: typeof first === 'number' ? endOffset < upperBound : false
      }
    };
  } catch (error) {
    /**
     * Pass the error to the express error handling stack.
     */
    context.next(error);
  }
}

export default execute;
