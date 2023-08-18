import { Box, Button, Modal, Typography } from '@mui/material';
import styles from './ErrorModal.styles';

type ErrorModalProps = {
  open: boolean;
  onClose: () => void;
};

const ErrorModal = ({ open, onClose }: ErrorModalProps) => (
  <Modal open={open} onClose={onClose} sx={styles.modal}>
    <Box sx={styles.box}>
      <Typography textAlign="center" variant="h4" component="h2">
        Sorry
      </Typography>
      <Typography textAlign="center" sx={{ mt: 2 }}>
        The server is not available now, please try again later
      </Typography>
      <Button variant="contained" onClick={onClose} sx={styles.button}>
        Close
      </Button>
    </Box>
  </Modal>
);

export default ErrorModal;
