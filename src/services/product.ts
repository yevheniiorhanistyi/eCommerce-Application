import { Product } from '@commercetools/platform-sdk';
import { ModalContextType } from '../components/ModalProvider/type';
import { apiRoot } from './ClientBuilder';
import constants from './constants';

// eslint-disable-next-line import/prefer-default-export
export const getProduct = async (
  keyProduct: string,
  modal: ModalContextType,
): Promise<Product | null> => {
  try {
    const responseProduct = await apiRoot
      .products()
      .withKey({ key: keyProduct })
      .get()
      .execute();
    if (responseProduct.statusCode === 200) {
      return responseProduct.body;
    }
    return null;
  } catch (e) {
    modal.openModal();
    modal.setContent({
      title: constants.modal.title,
      text: constants.modal.text,
    });
    console.error('SDK getProduct', e);
    return null;
  }
};
