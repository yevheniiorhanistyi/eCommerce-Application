import { createContext, useContext, useMemo, useState } from 'react';
import {
  ModalContextType,
  ModalFunctionWithContent,
  TContent,
  TModalFunction,
  TModalName,
} from './type';
import ErrorModal from '../ErrorModal/ErrorModal';
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
    },
    imageView: {
      isOpen: false,
      content: {
        images: [],
        title: '',
      },
    },
  });

  const openModal: TModalFunction = (modalName: TModalName) => {
    setModals((prevModals) => ({
      ...prevModals,
      [modalName]: { ...prevModals[modalName], isOpen: true },
    }));
  };

  const closeModal: TModalFunction = (modalName: TModalName) => {
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
      <ErrorModal
        open={modals.error.isOpen}
        content={modals.error.content}
        onClose={() => closeModal('error')}
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
