import { Container, Modal, Paper, Typography } from '@mui/material';

import { enqueueSnackbar } from 'notistack';
import styles from './EditDataModal.styles';
import { TEditDataContent } from '../ModalProvider/type';
import EditDataForm from '../EditDataForm/EditDataForm';

interface EditDataModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: TEditDataContent;
}

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
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
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
