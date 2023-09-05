import { Container, Modal, Paper } from '@mui/material';

import { enqueueSnackbar } from 'notistack';
import styles from './AddAddressModal.styles';
import AddAddressForm from '../AddAddressForm/AddAddressForm';
import { IGetCustomerAddress } from '../../types/types';
import { TAddressContent } from '../ModalProvider/type';

interface AddAddressModalProps {
  isOpen: boolean;
  content: TAddressContent;
  onClose: () => void;
}

const AddAddressModal = ({
  isOpen,
  content,
  onClose,
}: AddAddressModalProps) => {
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
          <AddAddressForm
            userId={content.userId}
            content={content.address}
            onEditDataSuccess={handleEditData}
            isBilling={content.isBilling}
            versionId={content.versionId}
          />
        </Paper>
      </Container>
    </Modal>
  );
};

export default AddAddressModal;
