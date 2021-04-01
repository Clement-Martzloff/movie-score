/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SearchMoviesTableRefetchQueryVariables = {
    count?: number | null;
    cursor?: string | null;
    term?: string | null;
    id: string;
};
export type SearchMoviesTableRefetchQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"SearchMoviesTable_searchOmdbMovies">;
    } | null;
};
export type SearchMoviesTableRefetchQuery = {
    readonly response: SearchMoviesTableRefetchQueryResponse;
    readonly variables: SearchMoviesTableRefetchQueryVariables;
};



/*
query SearchMoviesTableRefetchQuery(
  $count: Int = 10
  $cursor: String
  $term: String
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...SearchMoviesTable_searchOmdbMovies_4j0hnM
    id
  }
}

fragment SearchMoviesTable_searchOmdbMovies_4j0hnM on User {
  searchOmdbMovies(first: $count, after: $cursor, term: $term) {
    edges {
      node {
        id
        title
        year
        imdbId
        type
        posterUrl
        votes
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": 10,
  "kind": "LocalArgument",
  "name": "count"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cursor"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "term"
},
v4 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v5 = {
  "kind": "Variable",
  "name": "term",
  "variableName": "term"
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  (v5/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchMoviesTableRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor"
              },
              (v5/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "SearchMoviesTable_searchOmdbMovies"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "SearchMoviesTableRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          (v7/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v8/*: any*/),
                "concreteType": "OmdbMovieConnection",
                "kind": "LinkedField",
                "name": "searchOmdbMovies",
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
                          (v7/*: any*/),
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
                          (v6/*: any*/)
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
              {
                "alias": null,
                "args": (v8/*: any*/),
                "filters": [
                  "term"
                ],
                "handle": "connection",
                "key": "SearchMoviesQuery_searchOmdbMovies",
                "kind": "LinkedHandle",
                "name": "searchOmdbMovies"
              }
            ],
            "type": "User",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f3f8096c5fb5fe0e2a529e832d25c6d3",
    "id": null,
    "metadata": {},
    "name": "SearchMoviesTableRefetchQuery",
    "operationKind": "query",
    "text": "query SearchMoviesTableRefetchQuery(\n  $count: Int = 10\n  $cursor: String\n  $term: String\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...SearchMoviesTable_searchOmdbMovies_4j0hnM\n    id\n  }\n}\n\nfragment SearchMoviesTable_searchOmdbMovies_4j0hnM on User {\n  searchOmdbMovies(first: $count, after: $cursor, term: $term) {\n    edges {\n      node {\n        id\n        title\n        year\n        imdbId\n        type\n        posterUrl\n        votes\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
  }
};
})();
(node as any).hash = '7acaef12091c1b9490d7732f363e2118';
export default node;
