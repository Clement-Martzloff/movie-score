interface IdentityData {
  email: string;
  password: string;
}

const identityServerUrl = process.env.REACT_APP_IDENTITY_SERVER_URL;
const requestInit = (data: IdentityData) => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
});

export const IdentityService = {
  async signup(data: IdentityData) {
    const response = await fetch(
      `${identityServerUrl}/signup`,
      requestInit(data)
    );

    return await response.json();
  },
  async signin(data: IdentityData) {
    const response = await fetch(
      `${identityServerUrl}/signin`,
      requestInit(data)
    );

    return await response.json();
  },
};
