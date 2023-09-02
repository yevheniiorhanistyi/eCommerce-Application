import { Box, Modal, Typography } from '@mui/material';

import styles from './EditDataModal.styles';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EditDataModal = ({ isOpen, onClose }: EditModalProps) => (
  <Modal
    open={isOpen}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={styles.modal}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Text in a modal
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </Typography>
    </Box>
  </Modal>
);

export default EditDataModal;
