import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useState } from "react";
import { graphql } from "babel-plugin-relay/macro";
import { useQuery } from "relay-hooks";
import { SearchMoviesQuery } from "./__generated__/SearchMoviesQuery.graphql";

import useToken from "../../identity/UseToken";
import SearchInput from "../../shared/SearchInput";
import SearchMoviesConfig from "./SearchMoviesConfig";
import SearchMoviesTable from "./SearchMoviesTable";

const query = graphql`
  query SearchMoviesQuery(
    $id: ID!
    $first: Int
    $after: String
    $term: String
  ) {
    me(id: $id) {
      email
      ...SearchMoviesTable_searchOmdbMovies
        @arguments(count: $first, cursor: $after, term: $term)
    }
  }
`;

export default function SearchMovies() {
  const { getDecodedToken } = useToken();
  const [searchTerm, setSearchTerm] = useState("Batman");
  const { data, error } = useQuery<SearchMoviesQuery>(query, {
    id: getDecodedToken().id,
    first: 10,
    after: null,
    term: searchTerm,
  });

  return (
    <SearchMoviesConfig>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          Search movies
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <SearchInput
          initialValue={searchTerm}
          label={"Search by title"}
          placeholder={"e.g batman"}
          setTerm={setSearchTerm}
        />
      </Grid>
      <Grid item xs={12}>
        {Boolean(data) ? (
          <SearchMoviesTable data={data!} />
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </SearchMoviesConfig>
  );
}
