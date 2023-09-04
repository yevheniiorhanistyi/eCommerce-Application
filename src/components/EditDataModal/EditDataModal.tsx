import { Container, Modal, Paper } from '@mui/material';

import { enqueueSnackbar } from 'notistack';
import styles from './EditDataModal.styles';
import EditDataForm from '../EditDataForm/EditDataForm';
import { IGetCustomerData } from '../../types/types';

type EditDataModalProps = {
  isOpen: boolean;
  content: IGetCustomerData;
  onClose: () => void;
};

const EditDataModal = ({ isOpen, content, onClose }: EditDataModalProps) => {
  const handleEditData = () => {
    enqueueSnackbar('Changes saved succesfully!', {
      variant: 'success',
    });
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <Container maxWidth="sm" sx={styles.outerBox}>
        <Paper sx={styles.paper}>
          <EditDataForm customer={content} onEditDataSuccess={handleEditData} />
        </Paper>
      </Container>
    </Modal>
  );
};

export default EditDataModal;
