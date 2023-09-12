import axios from 'axios';
import { Cart } from '@commercetools/platform-sdk';

import getActiveToken from '../authenticate/getActiveToken';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

const replicateCart = async (id: string): Promise<Cart | null> => {
  const { token } = await getActiveToken();
  try {
    const response = await axios.post(
      `${baseUrl}/${projectKey}/carts/replicate`,
      JSON.stringify({
        reference: {
          id,
          typeId: 'cart',
        },
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

export default replicateCart;
