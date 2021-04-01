import { useContext } from "react";
import {
  SET_PARAMS,
  SearchMoviesParamsContext,
} from "./SearchMoviesParamsContext";

function useSearchMoviesParams() {
  const contextValue = useContext(SearchMoviesParamsContext);

  if (contextValue === undefined) {
    throw new Error(`No provider for search movies params context given`);
  }

  const {
    searchMoviesParamsState: { count, pageNumber },
    dispatchCommand,
  } = contextValue;

  return {
    count,
    pageNumber,
    dispatchCommand,
    SET_PARAMS,
  };
}

export default useSearchMoviesParams;
