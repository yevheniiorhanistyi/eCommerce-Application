import { getTokenFromSessionStorage } from '../utils/authUtils';
import { getAccessToken } from './getAccessToken';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

interface AuthenticateCustomerProps {
  email: string;
  password: string;
}

export const authenticateCustomer = async ({
  email,
  password,
}: AuthenticateCustomerProps) => {
  const token = (await getTokenFromSessionStorage()) || (await getAccessToken());
  try {
    const response = await fetch(`${baseUrl}/${projectKey}/login`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
  } catch (error) {
    throw new Error(String(error));
  }
};

export default authenticateCustomer;
