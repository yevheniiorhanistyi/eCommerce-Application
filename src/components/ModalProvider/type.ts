import {
  IGetCustomerAddress,
  IGetCustomerData,
  IImage,
} from '../../types/types';

export type TModalName = 'error' | 'imageView' | 'customer' | 'address';

export type TErrorContent = {
  title: string;
  text: string;
};

export type TImageViewContent = {
  images: IImage[];
  title: string;
};

export type TCustomerContent = {
  customer: IGetCustomerData | null;
};

export type TAddressContent = {
  address?: IGetCustomerAddress;
  userId: string;
  isBilling: boolean;
  versionId: number;
  onClose: (isSuccess: boolean) => void;
};

export type TContent = {
  error?: TErrorContent;
  imageView?: TImageViewContent;
  customer?: TCustomerContent;
  address?: TAddressContent;
}[TModalName];

export type TModal = {
  [K in TModalName]: {
    isOpen: boolean;
    content: TContent;
    onClose?: () => void;
  };
};

export type TModalFunction = (modalName: TModalName, isClose: boolean) => void;

export type ModalFunctionWithContent = (
  modalName: TModalName,
  content: TContent,
) => void;

export type ModalContextType = {
  modals: TModal;
  openModal: TModalFunction;
  closeModal: TModalFunction;
  setContent: ModalFunctionWithContent;
};

export type TReturnClose = boolean | string;
