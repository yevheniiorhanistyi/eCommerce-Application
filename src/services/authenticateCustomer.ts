import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
} from '../utils/authUtils';
import { getAccessToken } from './getAccessToken';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

interface AuthenticateCustomerProps {
  email: string;
  password: string;
}

const handleErrorResponse = (response: Response) => {
  if (response.status === 400) {
    throw new Error('Incorrect email or password');
  } else {
    throw new Error('The server is not available now, please try again later');
  }
};

export const authenticateCustomer = async ({
  email,
  password,
}: AuthenticateCustomerProps) => {
  const token: string | null = getTokenFromLocalStorage() || (await getAccessToken());
  const response = await fetch(`${baseUrl}/${projectKey}/login`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) handleErrorResponse(response);
  setTokenToLocalStorage(token);
};

export default authenticateCustomer;
