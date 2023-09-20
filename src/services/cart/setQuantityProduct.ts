import axios from 'axios';
import { Cart } from '@commercetools/platform-sdk';

import getActiveToken from '../authenticate/getActiveToken';
import { getLineItemsAroundProduct } from './removeProductFromCart';
import getCartById from './getCartById';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

export interface ISetQuantityProductProps {
  cartId: string;
  productId: string;
  quantity: number;
}

const setQuantityProduct = async ({
  cartId,
  productId,
  quantity,
}: ISetQuantityProductProps): Promise<Cart | null> => {
  let variantId = 1;
  let actionItem = {};
  const { token } = await getActiveToken();
  const cartResult = await getCartById(cartId);
  const cartVersion = cartResult && cartResult.version;
  const lineItemResult = await getLineItemsAroundProduct(cartId, productId);
  const lineItem = lineItemResult && lineItemResult[0];
  const lineItemId = lineItemResult && lineItemResult[0].id;
  if (lineItem) {
    variantId = lineItem.variant.id;
  }
  if (quantity > 0) {
    actionItem = {
      action: 'addLineItem',
      productId,
      variantId,
      quantity,
    };
  } else {
    actionItem = {
      action: 'removeLineItem',
      lineItemId,
      quantity: Math.abs(quantity),
    };
  }
  try {
    const response = await axios.post(
      `${baseUrl}/${projectKey}/carts/${cartId}`,
      JSON.stringify({
        version: cartVersion,
        actions: [actionItem],
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

export default setQuantityProduct;
