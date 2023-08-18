import { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import { ModalContentType, ModalContextType } from './type';
import ErrorModal from '../ErrorModal/ErrorModal';

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: '',
    text: '',
  });

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const setContent = (content: ModalContentType) => setModalContent(content);

  const contextValue: ModalContextType = useMemo(
    () => ({
      modalOpen,
      modalContent,
      openModal,
      closeModal,
      setContent,
    }),
    [modalOpen, modalContent],
  );

  return (
    <ModalContext.Provider value={contextValue}>
      <ErrorModal
        open={modalOpen}
        content={modalContent}
        onClose={() => setModalOpen(false)}
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
