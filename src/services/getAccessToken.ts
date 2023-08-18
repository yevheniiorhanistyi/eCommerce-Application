const baseUrl = 'https://auth.europe-west1.gcp.commercetools.com/oauth/token';
const clientID = import.meta.env.VITE_REACT_APP_CLIENT_ID;
const clientSecret = import.meta.env.VITE_REACT_APP_CLIENT_SECRET;
const scope = import.meta.env.VITE_REACT_APP_SCOPES;

export const getAccessToken = async (): Promise<string> => {
  try {
    const credentials = `${clientID}:${clientSecret}`;
    const base64Credentials = btoa(credentials);

    const response = await fetch(baseUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${base64Credentials}`,
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        scope,
      }),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data: { access_token: string } = await response.json();
    return data.access_token;
  } catch (error) {
    throw new Error(String(error));
  }
};

export default getAccessToken;
