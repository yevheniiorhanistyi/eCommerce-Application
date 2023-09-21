import { IPrice } from '../types/productInterfaces';

const calculatePrices = (prices: IPrice) => {
  const discountedPrice = prices.discounted?.value
    ? (prices.discounted.value.centAmount / 10 ** 2).toFixed(2)
    : '';
  const originalPrice = prices.value
    ? (prices.value.centAmount / 10 ** 2).toFixed(2)
    : '';
  const hasDiscount = discountedPrice && discountedPrice !== originalPrice;

  return {
    discountedPrice,
    originalPrice,
    hasDiscount,
  };
};

export default calculatePrices;
