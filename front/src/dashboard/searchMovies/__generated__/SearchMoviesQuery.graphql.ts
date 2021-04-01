/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SearchMoviesQueryVariables = {
    id: string;
    first?: number | null;
    after?: string | null;
    term?: string | null;
};
export type SearchMoviesQueryResponse = {
    readonly me: {
        readonly email: string;
        readonly " $fragmentRefs": FragmentRefs<"SearchMoviesTable_searchOmdbMovies">;
    } | null;
};
export type SearchMoviesQuery = {
    readonly response: SearchMoviesQueryResponse;
    readonly variables: SearchMoviesQueryVariables;
};



/*
query SearchMoviesQuery(
  $id: ID!
  $first: Int
  $after: String
  $term: String
) {
  me(id: $id) {
    email
    ...SearchMoviesTable_searchOmdbMovies_L8bdz
    id
  }
}

fragment SearchMoviesTable_searchOmdbMovies_L8bdz on User {
  searchOmdbMovies(first: $first, after: $after, term: $term) {
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
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v6 = {
  "kind": "Variable",
  "name": "term",
  "variableName": "term"
},
v7 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  (v6/*: any*/)
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
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
    "name": "SearchMoviesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          {
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "first"
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "after"
              },
              (v6/*: any*/)
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
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Operation",
    "name": "SearchMoviesQuery",
    "selections": [
      {
        "alias": null,
        "args": (v4/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v5/*: any*/),
          {
            "alias": null,
            "args": (v7/*: any*/),
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
                      (v8/*: any*/),
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
          {
            "alias": null,
            "args": (v7/*: any*/),
            "filters": [
              "term"
            ],
            "handle": "connection",
            "key": "SearchMoviesQuery_searchOmdbMovies",
            "kind": "LinkedHandle",
            "name": "searchOmdbMovies"
          },
          (v8/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "31cdd6dbad6694664082d3c0f576989a",
    "id": null,
    "metadata": {},
    "name": "SearchMoviesQuery",
    "operationKind": "query",
    "text": "query SearchMoviesQuery(\n  $id: ID!\n  $first: Int\n  $after: String\n  $term: String\n) {\n  me(id: $id) {\n    email\n    ...SearchMoviesTable_searchOmdbMovies_L8bdz\n    id\n  }\n}\n\nfragment SearchMoviesTable_searchOmdbMovies_L8bdz on User {\n  searchOmdbMovies(first: $first, after: $after, term: $term) {\n    edges {\n      node {\n        id\n        title\n        year\n        imdbId\n        type\n        posterUrl\n        votes\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n"
  }
};
})();
(node as any).hash = '63425da7a78c42501cf9ba76ac2df7cc';
export default node;
