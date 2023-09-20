import { Container, Modal, Paper } from '@mui/material';

import EditDataForm from '../EditDataForm/EditDataForm';
import { TCustomerContent } from '../ModalProvider/type';

import styles from './EditDataModal.styles';

interface IEditDataModalProps {
  isOpen: boolean;
  content: TCustomerContent;
  onClose: () => void;
}

const EditDataModal = ({ isOpen, content, onClose }: IEditDataModalProps) => {
  if (content.customer) {
    return (
      <Modal open={isOpen} onClose={onClose}>
        <Container maxWidth="sm" sx={styles.outerBox}>
          <Paper sx={styles.paper}>
            <EditDataForm customer={content.customer} />
          </Paper>
        </Container>
      </Modal>
    );
  }
  return null;
};

export default EditDataModal;
