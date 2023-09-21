import { getLineItemsAroundProduct } from './removeProductFromCart';

const getQuantityProduct = async (
  cartId: string,
  productId: string,
): Promise<number | null> => {
  const lineItemResult = await getLineItemsAroundProduct(cartId, productId);
  const lineItem = lineItemResult && lineItemResult[0];

  if (lineItem) {
    return lineItem.quantity;
  }
  return null;
};

export default getQuantityProduct;
