import { IImage } from '../../types/types';

export type TModalName = 'error' | 'imageView';

export type TErrorContent = {
  title: string;
  text: string;
};

export type TImageViewContent = {
  images: IImage[];
  title: string;
};

export type TContent = {
  error: TErrorContent;
  imageView: TImageViewContent;
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
