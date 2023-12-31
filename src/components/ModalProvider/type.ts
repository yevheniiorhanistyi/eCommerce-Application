import {
  ICustomerAddressBase,
  IGetCustomerData,
  IImage,
  ISliderData,
} from '../../types/types';

export type TModalName =
  | 'error'
  | 'imageView'
  | 'customer'
  | 'address'
  | 'password'
  | 'editAddress'
  | 'confirm'
  | 'contribution';
export interface TErrorContent {
  title: string;
  text: string;
}

export interface TImageViewContent {
  images: IImage[];
  title: string;
  index: number;
}

export interface TCustomerContent {
  customer: IGetCustomerData | null;
}

export interface TAddressContent {
  address?: ICustomerAddressBase;
  userId: string;
  isBilling: boolean;
  versionId: number;
}

export interface TPasswordContent {
  customer: IGetCustomerData | null;
}

export interface TEditAddressContent {
  address: ICustomerAddressBase | null;
  userId: string | null;
  versionId: number | null;
}

export interface TConfirmContent {
  title: string;
  text: string;
}
export interface IContributionContent {
  name?: string | null;
  role?: string | null;
  bio?: string | null;
  github?: string | null;
  linkedin?: string | null;
  photo?: string | null;
  sliderData: ISliderData[];
}

export type TContent = {
  error?: TErrorContent;
  imageView?: TImageViewContent;
  customer?: TCustomerContent;
  address?: TAddressContent;
  password?: TPasswordContent;
  editAddress?: TEditAddressContent;
  confirm?: TConfirmContent;
  contribution?: IContributionContent;
}[TModalName];

export type TModal = {
  [K in TModalName]: {
    isOpen: boolean;
    content: TContent;
    onClose?: (value: TReturnClose) => void;
  };
};

export type TModalFunction = (modalName: TModalName, isClose: boolean) => void;

export type ModalFunctionWithContent = (
  modalName: TModalName,
  content: TContent,
  onClose?: (value: TReturnClose) => void,
) => void;

export type ModalContextType = {
  modals: TModal;
  openModal: TModalFunction;
  closeModal: TModalFunction;
  setContent: ModalFunctionWithContent;
};

export type TReturnClose = boolean | string;
