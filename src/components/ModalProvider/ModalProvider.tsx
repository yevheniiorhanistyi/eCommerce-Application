import { createContext, useContext, useMemo, useState } from 'react';
import {
  ModalContextType,
  ModalFunctionWithContent,
  TErrorContent,
  TModalFunction,
  TModalName,
} from './type';
import ErrorModal from '../ErrorModal/ErrorModal';
import { IGetCustomerData, IModalProviderProps } from '../../types/types';
import EditDataModal from '../EditDataModal/EditDataModal';
import AddAddressModal from '../AddAddressModal/AddAddressModal';

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
      content: {},
      onClose: () => {},
    },
    address: {
      isOpen: false,
      content: {} as any,
      onClose: () => {},
    },
  });

  const openModal: TModalFunction = (modalName: TModalName) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: { ...prevModals[modalName], isOpen: true },
    }));
  };

  const closeModal: TModalFunction = (modalName: TModalName, value?: any) => {
    modals[modalName].content?.onClose(value);
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: { ...prevModals[modalName], isOpen: false },
    }));
  };

  const setContent: ModalFunctionWithContent = (
    modalName: TModalName,
    content: any,
  ) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: { ...prevModals[modalName], content },
    }));
  };

  // const [modalOpen, setModalOpen] = useState(false);
  // const [modalContent, setModalContent] = useState({
  //   title: '',
  //   text: '',
  // });

  // const openModal = () => setModalOpen(true);
  // const closeModal = () => setModalOpen(false);
  // const setContent = (content: ModalContentType) => setModalContent(content);

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
        content={modals.customer.content as IGetCustomerData}
        onClose={() => closeModal('customer', true)}
      />
      <AddAddressModal
        isOpen={modals.address.isOpen}
        content={modals.address.content as any}
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
