import { Box, Button, Modal, Typography } from '@mui/material';
import { ModalContentType } from '../ModalProvider/type';

import styles from './ErrorModal.styles';

type ErrorModalProps = {
  open: boolean;
  content: ModalContentType;
  onClose: () => void;
};

const ErrorModal = ({ open, content, onClose }: ErrorModalProps) => (
  <Modal open={open} onClose={onClose}>
    <Box sx={styles.box}>
      <Typography textAlign="center" variant="h4" component="h2">
        {content.title}
      </Typography>
      <Typography textAlign="center" sx={{ mt: 2 }}>
        {content.text}
      </Typography>
      <Button variant="contained" onClick={onClose} sx={styles.button}>
        Close
      </Button>
    </Box>
  </Modal>
);

export default ErrorModal;
