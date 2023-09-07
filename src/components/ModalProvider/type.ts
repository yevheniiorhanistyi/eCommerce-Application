import {
  IGetCustomerAddress,
  IGetCustomerData,
  IImage,
} from '../../types/types';

export type TModalName =
  | 'error'
  | 'imageView'
  | 'customer'
  | 'address'
  | 'password'
  | 'editAddress';

export type TErrorContent = {
  title: string;
  text: string;
};

export type TImageViewContent = {
  images: IImage[];
  title: string;
  index: number;
};

export type TCustomerContent = {
  customer: IGetCustomerData | null;
  onClose: (isSuccess: boolean) => void;
};

export type TAddressContent = {
  address?: IGetCustomerAddress;
  userId: string;
  isBilling: boolean;
  versionId: number;
  onClose: (isSuccess: boolean) => void;
};

export type TPasswordContent = {
  customer: IGetCustomerData | null;
  onClose: (isSuccess: boolean) => void;
};

export type TEditAddressContent = {
  address?: IGetCustomerAddress;
  onClose: (isSuccess: boolean) => void;
};

export type TContent = {
  error?: TErrorContent;
  imageView?: TImageViewContent;
  customer?: TCustomerContent;
  address?: TAddressContent;
  password?: TPasswordContent;
  editAddress?: TEditAddressContent;
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
