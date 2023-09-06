import { Container, Modal, Paper } from '@mui/material';

import styles from './EditPasswordModal.styles';
// eslint-disable-next-line import/no-cycle
import { TPasswordContent } from '../ModalProvider/type';
// eslint-disable-next-line import/no-cycle
import EditPasswordForm from '../EditPasswordForm/EditPasswordForm';

type EditPasswordModalProps = {
  isOpen: boolean;
  content: TPasswordContent;
  onClose: () => void;
};

const EditPasswordModal = ({
  isOpen,
  content,
  onClose,
}: EditPasswordModalProps) => {
  const handleEditData = () => {
    onClose();
  };
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Container maxWidth="sm" sx={styles.outerBox}>
        <Paper sx={styles.paper}>
          <EditPasswordForm onEditDataSuccess={handleEditData} />
        </Paper>
      </Container>
    </Modal>
  );
};

export default EditPasswordModal;
