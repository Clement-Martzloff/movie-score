/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type RegisterMeInput = {
    email: string;
    password: string;
};
export type RegisterMeMutationVariables = {
    input: RegisterMeInput;
};
export type RegisterMeMutationResponse = {
    readonly registerMe: {
        readonly email: string;
    } | null;
};
export type RegisterMeMutation = {
    readonly response: RegisterMeMutationResponse;
    readonly variables: RegisterMeMutationVariables;
};



/*
mutation RegisterMeMutation(
  $input: RegisterMeInput!
) {
  registerMe(input: $input) {
    email
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
    "concreteType": "RegisterMeResponse",
    "kind": "LinkedField",
    "name": "registerMe",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
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
    "name": "RegisterMeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RegisterMeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4623163c69c76a29da11773ea9e1a001",
    "id": null,
    "metadata": {},
    "name": "RegisterMeMutation",
    "operationKind": "mutation",
    "text": "mutation RegisterMeMutation(\n  $input: RegisterMeInput!\n) {\n  registerMe(input: $input) {\n    email\n  }\n}\n"
  }
};
})();
(node as any).hash = '43b8290151c7690162156f61508ef9a2';
export default node;
