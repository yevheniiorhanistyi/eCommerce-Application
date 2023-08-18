export type ModalContentType = {
  title: string;
  text: string;
};

export type ModalContextType = {
  modalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  setContent: (content: ModalContentType) => void;
};
