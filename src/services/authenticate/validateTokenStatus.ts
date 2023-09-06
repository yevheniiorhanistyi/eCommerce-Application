import axios from 'axios';
import { ITokenStatusResponse } from '../../types/types';

const baseUrl = import.meta.env.VITE_REACT_APP_AUTH_URL;
const clientID = import.meta.env.VITE_REACT_APP_CLIENT_ID;
const clientSecret = import.meta.env.VITE_REACT_APP_CLIENT_SECRET;

export const validateTokenStatus = async (
  token: string,
): Promise<ITokenStatusResponse> => {
  const credentials = `${clientID}:${clientSecret}`;
  const base64Credentials = btoa(credentials);

  const params = new URLSearchParams();
  params.append('token', token);

  const response = await axios
    .post<ITokenStatusResponse>(
    `${baseUrl}/oauth/introspect`,
    params.toString(),
    {
      headers: {
        Authorization: `Basic ${base64Credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  )
    .then((res) => res.data)
    .catch((error) => {
      console.error(error);
      return { active: false };
    });

  return response;
};

export default validateTokenStatus;
