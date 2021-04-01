import React, {
  useReducer,
  useMemo,
  createContext,
  ReactNode,
  Dispatch,
} from "react";

enum CommandName {
  SET_TERM = "SET_TERM",
}

interface SearchInputState {
  term: string;
}
interface SearchInputCommand {
  name: string;
  body?: SearchInputState;
}

type ContextValue = {
  searchInputState: SearchInputState;
  dispatchCommand: Dispatch<SearchInputCommand>;
};

export const { SET_TERM } = CommandName;
export const SearchInputContext = createContext<ContextValue | undefined>(
  undefined
);
const initialSearchInputState: SearchInputState = {
  term: "batmoule",
};

function reducer(
  searchInputState: SearchInputState = initialSearchInputState,
  searchInputEvent: SearchInputCommand
): SearchInputState {
  switch (searchInputEvent.name) {
    case SET_TERM:
      return { term: searchInputEvent.body!.term };
    default:
      return searchInputState;
  }
}

export function SearchInputContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [searchInputState, dispatchCommand] = useReducer(
    reducer,
    initialSearchInputState
  );
  const memoizedContextValue = useMemo(
    () => ({
      searchInputState,
      dispatchCommand,
    }),
    [searchInputState, dispatchCommand]
  );

  return (
    <SearchInputContext.Provider value={memoizedContextValue}>
      {children}
    </SearchInputContext.Provider>
  );
}
