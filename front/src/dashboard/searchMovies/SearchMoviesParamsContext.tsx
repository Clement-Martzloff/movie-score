import React, {
  useReducer,
  useMemo,
  createContext,
  ReactNode,
  Dispatch,
} from "react";

enum CommandName {
  SET_PARAMS = "set_params",
}

interface SearchMoviesParamsState {
  count: number;
  pageNumber: string;
}
interface SearchMoviesParamsCommand {
  name: string;
  body?: SearchMoviesParamsState;
}

type ContextValue = {
  searchMoviesParamsState: SearchMoviesParamsState;
  dispatchCommand: Dispatch<SearchMoviesParamsCommand>;
};

export const { SET_PARAMS } = CommandName;
export const SearchMoviesParamsContext = createContext<
  ContextValue | undefined
>(undefined);
const initialSearchMoviesParamsState: SearchMoviesParamsState = {
  count: 10,
  pageNumber: "1",
};

function reducer(
  searchMoviesParamsState: SearchMoviesParamsState = initialSearchMoviesParamsState,
  contextCommand: SearchMoviesParamsCommand
): SearchMoviesParamsState {
  const { name, body } = contextCommand;

  switch (name) {
    case SET_PARAMS:
      return { ...body! };
    default:
      return searchMoviesParamsState;
  }
}

export function SearchMoviesParamsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [searchMoviesParamsState, dispatchCommand] = useReducer(
    reducer,
    initialSearchMoviesParamsState
  );
  const memoizedContextValue = useMemo(
    () => ({
      searchMoviesParamsState,
      dispatchCommand,
    }),
    [searchMoviesParamsState, dispatchCommand]
  );

  return (
    <SearchMoviesParamsContext.Provider value={memoizedContextValue}>
      {children}
    </SearchMoviesParamsContext.Provider>
  );
}
