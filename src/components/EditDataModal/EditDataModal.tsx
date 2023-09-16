import { Container, Modal, Paper } from '@mui/material';

import styles from './EditDataModal.styles';
import EditDataForm from '../EditDataForm/EditDataForm';
import { TCustomerContent } from '../ModalProvider/type';

type EditDataModalProps = {
  isOpen: boolean;
  content: TCustomerContent;
  onClose: () => void;
};

const EditDataModal = ({ isOpen, content, onClose }: EditDataModalProps) => {
  const handleEditData = () => {
    onClose();
  };

  if (content.customer) {
    return (
      <Modal open={isOpen} onClose={onClose}>
        <Container maxWidth="sm" sx={styles.outerBox}>
          <Paper sx={styles.paper}>
            <EditDataForm
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

export default EditDataModal;
