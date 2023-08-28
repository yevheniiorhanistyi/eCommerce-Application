import axios from 'axios';
import { setTokenToLocalStorage } from '../../utils/authUtils';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const baseUrl = import.meta.env.VITE_REACT_APP_AUTH_URL;
const clientID = import.meta.env.VITE_REACT_APP_CLIENT_ID;
const clientSecret = import.meta.env.VITE_REACT_APP_CLIENT_SECRET;
const scope = import.meta.env.VITE_REACT_APP_SCOPES;

interface IAuthenticateCustomerProps {
  email: string;
  password: string;
}

interface ITokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

export const processResponseError = (response: Response) => {
  if (response.status === 400) {
    throw new Error('Incorrect email or password');
  } else {
    throw new Error('The server is not available now, please try again later');
  }
};

export const authenticateClient = async ({
  email,
  password,
}: IAuthenticateCustomerProps) => {
  const credentials = `${clientID}:${clientSecret}`;
  const base64Credentials = btoa(credentials);

  await axios
    .post<ITokenResponse>(
    `${baseUrl}/oauth/${projectKey}/customers/token`,
    new URLSearchParams({
      grant_type: 'password',
      username: email,
      password,
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
      setTokenToLocalStorage(data.access_token, true);
    })
    .catch((error) => {
      if (error.response) processResponseError(error.response);
    });
};

export default authenticateClient;
