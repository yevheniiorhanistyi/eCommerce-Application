import { Container, Modal, Paper } from '@mui/material';

import { TPasswordContent } from '../ModalProvider/type';
import EditPasswordForm from '../EditPasswordForm/EditPasswordForm';

import styles from './EditPasswordModal.styles';

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
  if (content.customer) {
    return (
      <Modal open={isOpen} onClose={onClose}>
        <Container maxWidth="sm" sx={styles.outerBox}>
          <Paper sx={styles.paper}>
            <EditPasswordForm
              customer={content.customer}
              onEditDataSuccess={handleEditData}
            />
          </Paper>
        </Container>
      </Modal>
    );
  }
  return null;
};

export default EditPasswordModal;
