import { Container, Modal, Paper } from '@mui/material';

import styles from './EditAddressModal.styles';
import { TCustomerContent } from '../ModalProvider/type';
import EditAddressForm from '../EditAddressForm/EditAddressForm';

type EditDataModalProps = {
  isOpen: boolean;
  content: TCustomerContent;
  onClose: () => void;
};

const EditAddressModal = ({ isOpen, content, onClose }: EditDataModalProps) => {
  const handleEditData = () => {
    onClose();
  };

  if (content.customer) {
    return (
      <Modal open={isOpen} onClose={onClose}>
        <Container maxWidth="sm" sx={styles.outerBox}>
          <Paper sx={styles.paper}>
            <EditAddressForm
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

export default EditAddressModal;
