import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

import { graphql } from "babel-plugin-relay/macro";
import { usePaginationFragment, commitMutation } from "react-relay";
import environment from "../../relayEnvironment";
import { SearchMoviesQueryResponse } from "./__generated__/SearchMoviesQuery.graphql";
import { SearchMoviesTable_searchOmdbMovies$key } from "./__generated__/SearchMoviesTable_searchOmdbMovies.graphql";
import { SearchMoviesTableRefetchQuery } from "./__generated__/SearchMoviesTableRefetchQuery.graphql";
import { SearchMoviesTableMutation } from "./__generated__/SearchMoviesTableMutation.graphql";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 420,
  },
}));

type SearchMoviesTableProps = {
  data: SearchMoviesQueryResponse;
};

const searchMoviesFragmentSpec = graphql`
  fragment SearchMoviesTable_searchOmdbMovies on User
  @argumentDefinitions(
    count: { type: "Int", defaultValue: 10 }
    cursor: { type: "String" }
    term: { type: "String" }
  )
  @refetchable(queryName: "SearchMoviesTableRefetchQuery") {
    searchOmdbMovies(
      first: $count
      after: $cursor
      term: $term # Non-pagination variables
    ) @connection(key: "SearchMoviesQuery_searchOmdbMovies") {
      edges {
        node {
          id
          title
          year
          imdbId
          type
          posterUrl
          votes
        }
      }
    }
  }
`;

export default function SearchMoviesTable(props: SearchMoviesTableProps) {
  const { data, loadNext } = usePaginationFragment<
    SearchMoviesTableRefetchQuery,
    SearchMoviesTable_searchOmdbMovies$key
  >(searchMoviesFragmentSpec, props.data.me);
  const classes = useStyles();

  return (
    <>
      <Fab
        className={classes.fab}
        variant="extended"
        size="medium"
        color="secondary"
        onClick={() => {
          loadNext(10);
        }}
      >
        Load More
      </Fab>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table
            stickyHeader
            aria-label="simple table"
            style={{ width: "100%" }}
          >
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Year</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Votes</TableCell>
                <TableCell>Action(s)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.searchOmdbMovies?.edges?.map((edge) => (
                <TableRow key={edge?.node?.id}>
                  <TableCell component="th" scope="row">
                    {edge?.node?.title}
                  </TableCell>
                  <TableCell>{edge?.node?.year}</TableCell>
                  <TableCell>{edge?.node?.type}</TableCell>
                  <TableCell>{edge?.node?.votes}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => upvoteMovie(edge?.node?.title)}
                    >
                      Upvote
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );

  function upvoteMovie(title: string | null | undefined) {
    if (title) {
      return commitMutation<SearchMoviesTableMutation>(environment, {
        mutation: graphql`
          mutation SearchMoviesTableMutation($input: UpvoteMovieInput) {
            upvoteMovie(input: $input) {
              title
            }
          }
        `,
        variables: { input: { title } },
        /* Mutation completed */
        onCompleted: console.log,
        /* Mutation errored */
        onError: console.log,
      });
    }
  }
}
