import { IPriceValue } from '../types/productInterfaces';

const parsingPrice = (price: IPriceValue): string => `${(price.centAmount / 10 ** price.fractionDigits).toFixed(
  price.fractionDigits,
)} ${price.currencyCode}`;

export default parsingPrice;
