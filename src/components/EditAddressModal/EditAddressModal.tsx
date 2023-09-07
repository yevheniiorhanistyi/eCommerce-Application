import { Container, Modal, Paper } from '@mui/material';

import styles from './EditAddressModal.styles';
// eslint-disable-next-line import/no-cycle
import EditAddressForm from '../EditAddressForm/EditAddressForm';
import { ICustomerAddressBase } from '../../types/types';

type EditAddressModalProps = {
  isOpen: boolean;
  address: ICustomerAddressBase;
  onClose: () => void;
};

const EditAddressModal = ({ isOpen, address, onClose }: EditAddressModalProps) => {
  const handleEditData = () => {
    onClose();
  };

  if (address) {
    return (
      <Modal open={isOpen} onClose={onClose}>
        <Container maxWidth="sm" sx={styles.outerBox}>
          <Paper sx={styles.paper}>
            <EditAddressForm
              address={address}
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
