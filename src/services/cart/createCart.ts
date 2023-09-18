import axios from 'axios';
import { Cart } from '@commercetools/platform-sdk';

import getActiveToken from '../authenticate/getActiveToken';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

const createCart = async (): Promise<Cart | null> => {
  const { token } = await getActiveToken();
  try {
    const response = await axios.post(
      `${baseUrl}/${projectKey}/carts`,
      JSON.stringify({
        currency: 'EUR',
      }),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default createCart;
