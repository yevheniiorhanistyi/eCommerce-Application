import axios from 'axios';
import { ITokenResponse, IAnonymousTokenResponse } from '../../types/types';
import { setTokenToLocalStorage } from '../../utils/authUtils';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const baseUrl = import.meta.env.VITE_REACT_APP_AUTH_URL;
const clientID = import.meta.env.VITE_REACT_APP_CLIENT_ID;
const clientSecret = import.meta.env.VITE_REACT_APP_CLIENT_SECRET;
const scope = import.meta.env.VITE_REACT_APP_SCOPES;

export const getAnonymousToken = async (): Promise<IAnonymousTokenResponse> => {
  const credentials = `${clientID}:${clientSecret}`;
  const base64Credentials = btoa(credentials);

  const response = await axios
    .post<ITokenResponse>(
    `${baseUrl}/oauth/${projectKey}/anonymous/token`,
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
    .then((res) => {
      const { data } = res;
      setTokenToLocalStorage(data.access_token, false);
      return {
        token: data.access_token,
        isAuthenticated: false,
      };
    })
    .catch((error) => {
      console.error(error);
      return {
        token: '',
        isAuthenticated: false,
      };
    });

  return response;
};

export default getAnonymousToken;
