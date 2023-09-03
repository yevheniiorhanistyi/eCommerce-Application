import { IImage } from '../../types/types';

export type TModalName = 'error' | 'imageView' | 'editInfo';

export type TErrorContent = {
  title: string;
  text: string;
};

export type TImageViewContent = {
  images: IImage[];
  title: string;
};

export type TEditDataContent = {
  title: string;
};

export type TContent = {
  error: TErrorContent;
  imageView: TImageViewContent;
  editInfo: TEditDataContent;
}[TModalName];

export type TModal = {
  [K in TModalName]: {
    isOpen: boolean;
    content: TContent;
  };
};

export type TModalFunction = (modalName: TModalName) => void;

export type ModalFunctionWithContent = (
  modalName: TModalName,
  content: TContent,
) => void;

export type ModalContentType = {
  title: string;
  text: string;
};

export type ModalContextType = {
  modals: TModal;
  openModal: TModalFunction;
  closeModal: TModalFunction;
  setContent: ModalFunctionWithContent;
};
