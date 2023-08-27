import { Product } from '@commercetools/platform-sdk';
import languageCode from '../../../utils/languageCode';

export interface IImage {
  url: string;
  dimensions: {
    w: number;
    h: number;
  };
}

export interface IProductDisplayData {
  title: string;
  description: string;
  images: IImage[];
}

export const parsingData = (
  data: Product | null,
): IProductDisplayData | null => {
  if (data) {
    return {
      title: data.masterData.current.name[languageCode],
      description: data.masterData.current.description
        ? data.masterData.current.description[languageCode]
        : '',
      images: data.masterData.staged.masterVariant.images ?? [],
    };
  }
  return null;
};
