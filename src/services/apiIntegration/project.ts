import { Project } from '@commercetools/platform-sdk';
import { apiRoot } from './ClientBuilder';
import { ModalContextType } from '../../components/ModalProvider/type';
import constants from './constants';

// eslint-disable-next-line import/prefer-default-export
export const getProject = async (
  modal: ModalContextType,
): Promise<Project | null> => {
  try {
    const project = await apiRoot.get().execute();
    return project.body;
  } catch (e) {
    modal.openModal();
    modal.setContent({
      title: constants.modal.title,
      text: constants.modal.text,
    });
    console.error('SDK getProject', e);
    return null;
  }
};
