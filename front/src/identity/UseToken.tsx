import jwt_decode from "jwt-decode";

export default function useToken() {
  return {
    setToken,
    getDecodedToken,
  };
}

/**
 * Warning: Storing JWTs in localStorage is not a safe approach to implement authentication on the frontend.
 * Because this project is focused on GraphQL, we want to keep things simple and therefore are using it here.
 * @see https://www.rdegges.com/2018/please-stop-using-local-storage/
 */
function setToken(token: string) {
  localStorage.setItem(process.env.REACT_APP_AUTH_TOKEN!, token);
}

function getDecodedToken() {
  return jwt_decode<{ id: string }>(
    localStorage.getItem(process.env.REACT_APP_AUTH_TOKEN!)!
  );
}
