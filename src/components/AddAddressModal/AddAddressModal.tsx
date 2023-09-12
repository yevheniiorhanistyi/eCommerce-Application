import { Container, Modal, Paper } from '@mui/material';

import styles from './AddAddressModal.styles';
// eslint-disable-next-line import/no-cycle
import AddAddressForm from '../AddAddressForm/AddAddressForm';
import { TAddressContent } from '../ModalProvider/type';

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
