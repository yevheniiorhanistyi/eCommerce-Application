import { Container, Modal, Paper } from '@mui/material';

import AddAddressForm from '../AddAddressForm/AddAddressForm';
import { TAddressContent } from '../ModalProvider/type';

import styles from './AddAddressModal.styles';

interface IAddAddressModalProps {
  isOpen: boolean;
  content: TAddressContent;
  onClose: () => void;
}

const AddAddressModal = ({
  isOpen,
  content,
  onClose,
}: IAddAddressModalProps) => (
  <Modal
    open={isOpen}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Container maxWidth="sm" sx={styles.outerBox}>
      <Paper sx={styles.paper}>
        <AddAddressForm
          userId={content.userId}
          isBilling={content.isBilling}
          versionId={content.versionId}
        />
      </Paper>
    </Container>
  </Modal>
);

export default AddAddressModal;
