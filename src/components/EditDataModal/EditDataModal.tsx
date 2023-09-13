import { Container, Modal, Paper } from '@mui/material';

import styles from './EditDataModal.styles';
// eslint-disable-next-line import/no-cycle
import EditDataForm from '../EditDataForm/EditDataForm';
import { TCustomerContent } from '../ModalProvider/type';

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
