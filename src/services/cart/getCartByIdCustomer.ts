import axios from 'axios';
import { Cart } from '@commercetools/platform-sdk';

import getActiveToken from '../authenticate/getActiveToken';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

const getCartByIdCustomer = async (
  idCustomer: string,
): Promise<Cart | null> => {
  const { token } = await getActiveToken();
  try {
    const response = await axios.get(
      `${baseUrl}/${projectKey}/carts/customer-id=${idCustomer}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getCartByIdCustomer;
