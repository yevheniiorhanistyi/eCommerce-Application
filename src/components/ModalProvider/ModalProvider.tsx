import { createContext, useContext, useMemo, useState } from 'react';
import {
  ModalContextType,
  ModalFunctionWithContent, TContent, TModalFunction,
  TModalName, TReturnClose,
} from './type';

import { IModalProviderProps } from '../../types/types';
import ErrorModal from '../ErrorModal/ErrorModal';
import EditDataModal from '../EditDataModal/EditDataModal';
import AddAddressModal from '../AddAddressModal/AddAddressModal';
import ProductModal from '../ProductModal/ProductModal';
import EditPasswordModal from '../EditPasswordModal/EditPasswordModal';
import EditAddressModal from '../EditAddressModal/EditAddressModal';
import ContributionModal from '../ContributionModal/ContributionModal';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import defaultValues from './defaultValues';

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: IModalProviderProps) => {
  const [modals, setModals] = useState(defaultValues);

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
      <ConfirmModal
        open={modals.confirm.isOpen}
        content={modals.confirm.content}
        onClose={() => closeModal('confirm', false)}
        onConfirm={() => closeModal('confirm', true)}
      />
      <ContributionModal
        open={modals.contribution.isOpen}
        content={modals.contribution.content}
        onClose={() => closeModal('contribution', true)}
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
