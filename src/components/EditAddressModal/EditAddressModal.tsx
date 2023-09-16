import { Container, Modal, Paper } from '@mui/material';

import styles from './EditAddressModal.styles';
import EditAddressForm from '../EditAddressForm/EditAddressForm';
import { TEditAddressContent } from '../ModalProvider/type';
import { ICustomerAddressBase } from '../../types/types';

type EditAddressModalProps = {
  isOpen: boolean;
  content: TEditAddressContent;
  onClose: () => void;
};

const EditAddressModal = ({
  isOpen,
  content,
  onClose,
}: EditAddressModalProps) => {
  const handleEditData = () => {
    onClose();
  };

  if ((content as TEditAddressContent).address) {
    return (
      <Modal open={isOpen} onClose={onClose}>
        <Container maxWidth="sm" sx={styles.outerBox}>
          <Paper sx={styles.paper}>
            <EditAddressForm
              address={content.address as ICustomerAddressBase}
              onEditDataSuccess={handleEditData}
              userId={content.userId as string}
              versionId={content.versionId as number}
            />
          </Paper>
        </Container>
      </Modal>
    );
  }
  return null;
};

export default EditAddressModal;
