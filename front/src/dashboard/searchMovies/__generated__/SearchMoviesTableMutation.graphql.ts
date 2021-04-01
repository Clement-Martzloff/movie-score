/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpvoteMovieInput = {
    title: string;
};
export type SearchMoviesTableMutationVariables = {
    input?: UpvoteMovieInput | null;
};
export type SearchMoviesTableMutationResponse = {
    readonly upvoteMovie: {
        readonly title: string | null;
    } | null;
};
export type SearchMoviesTableMutation = {
    readonly response: SearchMoviesTableMutationResponse;
    readonly variables: SearchMoviesTableMutationVariables;
};



/*
mutation SearchMoviesTableMutation(
  $input: UpvoteMovieInput
) {
  upvoteMovie(input: $input) {
    title
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpvoteMovieResponse",
    "kind": "LinkedField",
    "name": "upvoteMovie",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchMoviesTableMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchMoviesTableMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "627d85d2a30e8d9c030f1a07a76cd3f6",
    "id": null,
    "metadata": {},
    "name": "SearchMoviesTableMutation",
    "operationKind": "mutation",
    "text": "mutation SearchMoviesTableMutation(\n  $input: UpvoteMovieInput\n) {\n  upvoteMovie(input: $input) {\n    title\n  }\n}\n"
  }
};
})();
(node as any).hash = 'da2188e7cd84fe68ba36a78f81c57287';
export default node;
