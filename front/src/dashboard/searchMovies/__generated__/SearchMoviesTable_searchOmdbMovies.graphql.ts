/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SearchMoviesTable_searchOmdbMovies = {
    readonly searchOmdbMovies: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly title: string | null;
                readonly year: string | null;
                readonly imdbId: string | null;
                readonly type: string | null;
                readonly posterUrl: string | null;
                readonly votes: number | null;
            } | null;
        } | null> | null;
    } | null;
    readonly id: string;
    readonly " $refType": "SearchMoviesTable_searchOmdbMovies";
};
export type SearchMoviesTable_searchOmdbMovies$data = SearchMoviesTable_searchOmdbMovies;
export type SearchMoviesTable_searchOmdbMovies$key = {
    readonly " $data"?: SearchMoviesTable_searchOmdbMovies$data;
    readonly " $fragmentRefs": FragmentRefs<"SearchMoviesTable_searchOmdbMovies">;
};



const node: ReaderFragment = (function(){
var v0 = [
  "searchOmdbMovies"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": 10,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "term"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./SearchMoviesTableRefetchQuery.graphql.ts'),
      "identifierField": "id"
    }
  },
  "name": "SearchMoviesTable_searchOmdbMovies",
  "selections": [
    {
      "alias": "searchOmdbMovies",
      "args": [
        {
          "kind": "Variable",
          "name": "term",
          "variableName": "term"
        }
      ],
      "concreteType": "OmdbMovieConnection",
      "kind": "LinkedField",
      "name": "__SearchMoviesQuery_searchOmdbMovies_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "OmdbMovieEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "OmdbMovie",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "title",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "year",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "imdbId",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "type",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "posterUrl",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "votes",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v1/*: any*/)
  ],
  "type": "User",
  "abstractKey": null
};
})();
(node as any).hash = '7acaef12091c1b9490d7732f363e2118';
export default node;
