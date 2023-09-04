import { ICustomerAddressBase, IGetCustomerData, IImage } from '../../types/types';

export type TModalName = 'error' | 'imageView' | 'customer' | 'address';

export type TErrorContent = {
  title: string;
  text: string;
};

export type TImageViewContent = {
  images: IImage[];
  title: string;
};

export type TContent = {
  error?: TErrorContent;
  imageView?: TImageViewContent;
  customer?: IGetCustomerData;
  address?: ICustomerAddressBase,
}[TModalName];

export type TModal = {
  [K in TModalName]: {
    isOpen: boolean;
    content: any;
    onClose?: () => void;
  };
};

export type TModalFunction = (modalName: TModalName, isClose: boolean) => void;

export type ModalFunctionWithContent = (
  modalName: TModalName,
  content: any,
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
