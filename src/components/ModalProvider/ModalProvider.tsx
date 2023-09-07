import { createContext, useContext, useMemo, useState } from 'react';
import {
  ModalContextType,
  ModalFunctionWithContent,
  TContent,
  TModalFunction,
  TModalName,
  TReturnClose,
} from './type';

import { IModalProviderProps } from '../../types/types';
import ErrorModal from '../ErrorModal/ErrorModal';
// eslint-disable-next-line import/no-cycle
import EditDataModal from '../EditDataModal/EditDataModal';
// eslint-disable-next-line import/no-cycle
import AddAddressModal from '../AddAddressModal/AddAddressModal';
// eslint-disable-next-line import/no-cycle
import ProductModal from '../ProductModal/ProductModal';
// eslint-disable-next-line import/no-cycle
import EditPasswordModal from '../EditPasswordModal/EditPasswordModal';
// eslint-disable-next-line import/no-cycle
import EditAddressModal from '../EditAddressModal/EditAddressModal';

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: IModalProviderProps) => {
  const [modals, setModals] = useState({
    error: {
      isOpen: false,
      content: {
        title: '',
        text: '',
      },
      onClose: () => {},
    },
    imageView: {
      isOpen: false,
      content: {
        images: [],
        title: '',
        index: 0,
      },
      onClose: () => {},
    },
    customer: {
      isOpen: false,
      content: {
        customer: null,
        onClose: (value: TReturnClose) => {},
      },
      onClose: () => {},
    },
    address: {
      isOpen: false,
      content: {
        userId: '',
        isBilling: false,
        versionId: 0,
        onClose: (value: TReturnClose) => {},
      },
      onClose: () => {},
    },
    password: {
      isOpen: false,
      content: {
        customer: null,
        onClose: (value: TReturnClose) => {},
      },
    },
    editAddress: {
      isOpen: false,
      content: {
        userId: '',
        versionId: 0,
        onClose: (value: TReturnClose) => {},
      },
      onClose: () => {},
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
    if (
      (modalName === 'address'
        || modalName === 'customer'
        || modalName === 'password'
        || modalName === 'editAddress')
      && value
    ) {
      modals[modalName].content?.onClose(value);
    }
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: { ...prevModals[modalName], isOpen: false },
    }));
  };

  const setContent: ModalFunctionWithContent = (
    modalName: TModalName,
    content: TContent,
  ) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: { ...prevModals[modalName], content },
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
        isOpen={modals.customer.isOpen}
        content={modals.customer.content}
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
