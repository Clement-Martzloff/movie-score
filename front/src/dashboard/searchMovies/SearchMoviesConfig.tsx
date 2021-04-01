import { ReactNode } from "react";

import { SearchInputContextProvider } from "../../shared/SearchInputContext";
import { SearchMoviesParamsContextProvider } from "./SearchMoviesParamsContext";

export default function Config({ children }: { children: ReactNode }) {
  return (
    <SearchInputContextProvider>
      <SearchMoviesParamsContextProvider>
        {children}
      </SearchMoviesParamsContextProvider>
    </SearchInputContextProvider>
  );
}
