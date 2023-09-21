import {
  TAddressContent,
  TConfirmContent,
  TCustomerContent,
  TEditAddressContent,
  TErrorContent,
  TImageViewContent,
  TPasswordContent,
  TReturnClose,
} from './type';

const defaultValues = {
  error: {
    isOpen: false,
    content: {
      title: '',
      text: '',
    } as TErrorContent,
    onClose: (value: TReturnClose) => {},
  },
  imageView: {
    isOpen: false,
    content: {
      images: [],
      title: '',
      index: 0,
    } as TImageViewContent,
    onClose: (value: TReturnClose) => {},
  },
  customer: {
    isOpen: false,
    content: {
      customer: null,
    } as TCustomerContent,
    onClose: (value: TReturnClose) => {},
  },
  address: {
    isOpen: false,
    content: {
      userId: '',
      isBilling: false,
      versionId: 0,
    } as TAddressContent,
    onClose: (value: TReturnClose) => {},
  },
  password: {
    isOpen: false,
    content: {
      customer: null,
    } as TPasswordContent,
    onClose: (value: TReturnClose) => {},
  },
  editAddress: {
    isOpen: false,
    content: {
      address: null,
      userId: null,
      versionId: null,
    } as TEditAddressContent,
    onClose: (value: TReturnClose) => {},
  },
  contribution: {
    isOpen: false,
    content: {
      sliderData: [],
    },
    onClose: (value: TReturnClose) => {},
  },
  confirm: {
    isOpen: false,
    content: {
      title: '',
      text: '',
    } as TConfirmContent,
    onClose: (value: TReturnClose) => {},
  },
};

export default defaultValues;
