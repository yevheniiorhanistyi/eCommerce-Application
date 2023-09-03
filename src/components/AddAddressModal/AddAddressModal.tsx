import { Container, Modal, Paper } from '@mui/material';

import { enqueueSnackbar } from 'notistack';
import styles from './AddAddressModal.styles';
import { TEditDataContent } from '../ModalProvider/type';
import EditDataForm from '../EditDataForm/EditDataForm';
import AddAddressForm from '../AddAddressForm/AddAddressForm';

interface EditDataModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: TEditDataContent;
}

const AddAddressModal = ({ isOpen, content, onClose }: EditDataModalProps) => {
  const handleEditData = () => {
    enqueueSnackbar('Changes saved succesfully!', {
      variant: 'success',
    });
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Container maxWidth="sm" sx={styles.outerBox}>
        <Paper sx={styles.paper}>
          <AddAddressForm customer={content} onEditDataSuccess={handleEditData} />
        </Paper>
      </Container>
    </Modal>
  );
};

export default AddAddressModal;
