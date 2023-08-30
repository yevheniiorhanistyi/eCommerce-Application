import { Product } from '@commercetools/platform-sdk';
import { IProductDisplayData } from '../../../types/types';
import languageCode from '../../../utils/languageCode';

const parsingData = (
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

export default parsingData;
