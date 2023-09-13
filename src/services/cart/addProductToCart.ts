import axios from 'axios';
import { Cart } from '@commercetools/platform-sdk';

import getActiveToken from '../authenticate/getActiveToken';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

export interface IAddProductToCartProps {
  cartId: string;
  cartVersion: number;
  productId: string;
  variantId: number;
}

const addProductToCart = async ({
  cartId,
  cartVersion,
  productId,
  variantId,
}: IAddProductToCartProps): Promise<Cart | null> => {
  const { token } = await getActiveToken();
  try {
    const response = await axios.post(
      `${baseUrl}/${projectKey}/carts/${cartId}`,
      JSON.stringify({
        version: cartVersion,
        actions: [
          {
            action: 'addLineItem',
            productId,
            variantId,
          },
        ],
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

export default addProductToCart;
