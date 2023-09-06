import { createContext, useContext, useMemo, useState } from 'react';
import {
  ModalContextType,
  ModalFunctionWithContent,
  TAddressContent,
  TContent,
  TErrorContent,
  TModalFunction,
  TModalName,
  TReturnClose,
} from './type';
import ErrorModal from '../ErrorModal/ErrorModal';
// eslint-disable-next-line import/no-cycle
import EditDataModal from '../EditDataModal/EditDataModal';
// eslint-disable-next-line import/no-cycle
import AddAddressModal from '../AddAddressModal/AddAddressModal';
import { IModalProviderProps } from '../../types/types';

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
      },
      onClose: () => {},
    },
    customer: {
      isOpen: false,
      content: {
        customer: null,
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
    if (modalName === 'address' && value) {
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
    [modals],
  );

  return (
    <ModalContext.Provider value={contextValue}>
      <EditDataModal
        isOpen={modals.customer.isOpen}
        content={modals.customer.content}
        onClose={() => closeModal('customer', true)}
      />
      <AddAddressModal
        isOpen={modals.address.isOpen}
        content={modals.address.content as TAddressContent}
        onClose={() => closeModal('address', true)}
      />
      <ErrorModal
        open={modals.error.isOpen}
        content={modals.error.content as TErrorContent}
        onClose={() => closeModal('error', true)}
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
