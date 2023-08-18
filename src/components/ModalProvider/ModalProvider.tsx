import { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import ErrorModal from '../ErrorModal/ErrorModal';

export type ModalContextType = {
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const contextValue: ModalContextType = useMemo(
    () => ({
      modalOpen,
      openModal,
      closeModal,
    }),
    [modalOpen],
  );

  return (
    <ModalContext.Provider value={contextValue}>
      <ErrorModal open={modalOpen} onClose={() => setModalOpen(false)} />
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
