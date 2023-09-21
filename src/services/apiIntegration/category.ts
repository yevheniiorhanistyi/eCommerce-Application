import { Category } from '@commercetools/platform-sdk';
import { ModalContextType } from '../../components/ModalProvider/type';
import { apiRoot } from './ClientBuilder';
import constants from './constants';

const getCategory = async (
  modal: ModalContextType,
): Promise<Category[] | null> => {
  try {
    const responseCategory = await apiRoot.categories().get().execute();
    if (responseCategory.statusCode === 200) {
      return responseCategory.body.results;
    }
    return null;
  } catch (e) {
    modal.openModal('error', false);
    modal.setContent('error', {
      title: constants.modal.title,
      text: constants.modal.text,
    });
    console.error('SDK getCategory', e);
    return null;
  }
};

export default getCategory;
