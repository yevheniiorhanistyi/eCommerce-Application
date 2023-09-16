import { createContext, useContext, useMemo, useState } from 'react';
import {
  ModalContextType,
  ModalFunctionWithContent,
  TAddressContent,
  TContent,
  TCustomerContent,
  TEditAddressContent,
  TErrorContent,
  TImageViewContent,
  TModalFunction,
  TModalName,
  TPasswordContent,
  TReturnClose,
} from './type';

import { IModalProviderProps } from '../../types/types';
import ErrorModal from '../ErrorModal/ErrorModal';
import EditDataModal from '../EditDataModal/EditDataModal';
import AddAddressModal from '../AddAddressModal/AddAddressModal';
import ProductModal from '../ProductModal/ProductModal';
import EditPasswordModal from '../EditPasswordModal/EditPasswordModal';
import EditAddressModal from '../EditAddressModal/EditAddressModal';

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: IModalProviderProps) => {
  const [modals, setModals] = useState({
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
  });

  const openModal: TModalFunction = (modalName: TModalName) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: { ...prevModals[modalName], isOpen: true },
    }));
  };

  const closeModal: TModalFunction = (
    modalName: TModalName,
    value: TReturnClose,
  ) => {
    modals[modalName].onClose(value);
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: { ...prevModals[modalName], isOpen: false },
    }));
  };

  const setContent: ModalFunctionWithContent = (
    modalName: TModalName,
    content: TContent,
    onClose: (value: TReturnClose) => void = () => {},
  ) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: { ...prevModals[modalName], content, onClose },
    }));
  };

  const contextValue: ModalContextType = useMemo(
    () => ({
      modals,
      openModal,
      closeModal,
      setContent,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [modals],
  );

  return (
    <ModalContext.Provider value={contextValue}>
      <EditAddressModal
        isOpen={modals.editAddress.isOpen}
        content={modals.editAddress.content}
        onClose={() => closeModal('editAddress', true)}
      />
      <EditDataModal
        isOpen={modals.customer.isOpen}
        content={modals.customer.content}
        onClose={() => closeModal('customer', true)}
      />
      <AddAddressModal
        isOpen={modals.address.isOpen}
        content={modals.address.content}
        onClose={() => closeModal('address', true)}
      />
      <EditPasswordModal
        isOpen={modals.password.isOpen}
        content={modals.password.content}
        onClose={() => closeModal('password', true)}
      />
      <ErrorModal
        open={modals.error.isOpen}
        content={modals.error.content}
        onClose={() => closeModal('error', true)}
      />
      <ProductModal
        open={modals.imageView.isOpen}
        content={modals.imageView.content}
        onClose={() => closeModal('imageView', true)}
      />
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
