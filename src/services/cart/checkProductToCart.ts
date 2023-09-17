import { getLineItemsAroundProduct } from './removeProductFromCart';

const checkProductToCart = async (
  cartId: string,
  productId: string,
): Promise<boolean> => {
  const lineItemResult = await getLineItemsAroundProduct(cartId, productId);

  if (lineItemResult && lineItemResult.length > 0) {
    return true;
  }
  return false;
};

export default checkProductToCart;
