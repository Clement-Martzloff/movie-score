import { Variables } from "relay-runtime";

async function fetchGraphQL(text: string, variables: Variables) {
  const response = await fetch(`${process.env.REACT_APP_GRAPHQL_SERVER_URL}`, {
    method: "POST",
    headers: {
      Authorization: `bearer ${localStorage.getItem(
        process.env.REACT_APP_AUTH_TOKEN!
      )!}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
}

export default fetchGraphQL;
