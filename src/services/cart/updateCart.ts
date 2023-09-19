import axios from 'axios';
import { Cart } from '@commercetools/platform-sdk';

import getActiveToken from '../authenticate/getActiveToken';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

export interface IAction {
  action: string;
  lineItemId: string;
}

export interface IUpdateCartProps {
  cartId: string;
  cartVersion: number;
  actions: IAction[];
}

const updateCart = async ({
  cartId,
  cartVersion,
  actions,
}: IUpdateCartProps): Promise<Cart | null> => {
  const { token } = await getActiveToken();
  try {
    const response = await axios.post(
      `${baseUrl}/${projectKey}/carts/${cartId}`,
      JSON.stringify({
        version: cartVersion,
        actions,
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

export default updateCart;
