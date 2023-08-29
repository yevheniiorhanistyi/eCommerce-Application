import { Product } from '@commercetools/platform-sdk';
import languageCode from '../../../utils/languageCode';

export interface IImage {
  url: string;
  dimensions: {
    w: number;
    h: number;
  };
}

export interface IPrice {
  type: string;
  currencyCode: string;
  centAmount: number;
  fractionDigits: number;
}
export interface IProductDisplayData {
  title: string;
  description: string;
  images: IImage[];
  price: string;
  discountPrice?: string;
}

const parsingPrice = (price: IPrice): string => `${(price.centAmount / 10 ** price.fractionDigits).toFixed(
  price.fractionDigits,
)} ${price.currencyCode}`;

export const parsingData = (
  data: Product | null,
): IProductDisplayData | null => {
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
