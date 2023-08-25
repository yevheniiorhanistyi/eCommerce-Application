import axios from 'axios';
import { setTokenToLocalStorage } from '../../utils/authUtils';

const baseUrl = import.meta.env.VITE_REACT_APP_AUTH_URL;
const clientID = import.meta.env.VITE_REACT_APP_CLIENT_ID;
const clientSecret = import.meta.env.VITE_REACT_APP_CLIENT_SECRET;
const scope = import.meta.env.VITE_REACT_APP_SCOPES;

export const getAccessToken = async () => {
  const credentials = `${clientID}:${clientSecret}`;
  const base64Credentials = btoa(credentials);

  await axios
    .post(
      `${baseUrl}/oauth/token`,
      new URLSearchParams({
        grant_type: 'client_credentials',
        scope,
      }),
      {
        headers: {
          Authorization: `Basic ${base64Credentials}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )
    .then((response) => {
      const { data } = response;
      setTokenToLocalStorage(data.access_token, false);
      return {
        token: data.access_token,
        isAuthenticated: false,
      };
    })
    .catch((error) => {
      console.error(error);
    });
};

export default getAccessToken;
