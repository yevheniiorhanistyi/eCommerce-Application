import axios from 'axios';
import { Cart, LineItem } from '@commercetools/platform-sdk';

import getActiveToken from '../authenticate/getActiveToken';
import getCartById from './getCartById';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

export interface IRemoveProductFromCartProps {
  cartId: string;
  cartVersion: number;
  productId: string;
}

export const getLineItemsAroundProduct = async (
  cartId: string,
  productId: string,
): Promise<LineItem[] | undefined> => {
  const cart = await getCartById(cartId);
  return cart?.lineItems.filter((item) => item.productId === productId);
};

const removeProductFromCart = async ({
  cartId,
  cartVersion,
  productId,
}: IRemoveProductFromCartProps): Promise<Cart | null> => {
  const { token } = await getActiveToken();
  const lineItemResult = await getLineItemsAroundProduct(cartId, productId);
  const lineItemId = lineItemResult ? lineItemResult[0].id : undefined;
  try {
    const response = await axios.post(
      `${baseUrl}/${projectKey}/carts/${cartId}`,
      JSON.stringify({
        version: cartVersion,
        actions: [
          {
            action: 'removeLineItem',
            lineItemId,
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

export default removeProductFromCart;
