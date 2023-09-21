import { Product } from '@commercetools/platform-sdk';
import { IProductDisplayData } from '../../../types/types';
import languageCode from '../../../utils/languageCode';
import { IPriceValue } from '../../../types/productInterfaces';

const parsingPrice = (price: IPriceValue): string => `${(price.centAmount / 10 ** price.fractionDigits).toFixed(
  price.fractionDigits,
)} ${price.currencyCode}`;

const parsingData = (data: Product | null): IProductDisplayData | null => {
  if (data) {
    let result = {
      title: data.masterData.current.name[languageCode],
      description: data.masterData.current.description
        ? data.masterData.current.description[languageCode]
        : '',
      images: data.masterData.staged.masterVariant.images ?? [],
      price: data.masterData.current.masterVariant.prices
        ? parsingPrice(data.masterData.current.masterVariant.prices[0].value)
        : '',
    };
    if (
      data.masterData.current.masterVariant.prices
      && data.masterData.current.masterVariant.prices[0].discounted
    ) {
      result = Object.assign(result, {
        discountPrice: parsingPrice(
          data.masterData.current.masterVariant.prices[0].discounted.value,
        ),
      });
    }
    return result;
  }
  return null;
};

export default parsingData;
