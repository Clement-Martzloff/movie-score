import { useContext } from "react";
import { SearchInputContext, SET_TERM } from "./SearchInputContext";

export default function useSearchInput() {
  const contextValue = useContext(SearchInputContext);

  if (contextValue === undefined) {
    throw new Error(`No provider for search input context given`);
  }

  const {
    searchInputState: { term },
    dispatchCommand,
  } = contextValue;

  return { term, dispatchCommand, SET_TERM };
}
