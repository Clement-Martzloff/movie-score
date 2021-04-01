/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type GetTokenInput = {
    email: string;
    password: string;
};
export type GetTokenMutationVariables = {
    input: GetTokenInput;
};
export type GetTokenMutationResponse = {
    readonly getToken: {
        readonly token: string;
    } | null;
};
export type GetTokenMutation = {
    readonly response: GetTokenMutationResponse;
    readonly variables: GetTokenMutationVariables;
};



/*
mutation GetTokenMutation(
  $input: GetTokenInput!
) {
  getToken(input: $input) {
    token
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
    "concreteType": "GetTokenResponse",
    "kind": "LinkedField",
    "name": "getToken",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
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
    "name": "GetTokenMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "GetTokenMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "899d75788c184ca1cf5f042076242eb9",
    "id": null,
    "metadata": {},
    "name": "GetTokenMutation",
    "operationKind": "mutation",
    "text": "mutation GetTokenMutation(\n  $input: GetTokenInput!\n) {\n  getToken(input: $input) {\n    token\n  }\n}\n"
  }
};
})();
(node as any).hash = '4369434743b3c8e34f2e3d9c159f626f';
export default node;
