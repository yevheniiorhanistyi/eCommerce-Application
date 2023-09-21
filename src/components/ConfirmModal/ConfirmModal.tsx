import { Box, Button, Modal, Typography } from '@mui/material';
import { TErrorContent } from '../ModalProvider/type';

import styles from './ConfirmModal.styles';

type ConfirmModalProps = {
  open: boolean;
  content: TErrorContent;
  onClose: () => void;
  onConfirm: () => void;
};

const ConfirmModal = ({
  open,
  content,
  onClose,
  onConfirm,
}: ConfirmModalProps) => (
  <Modal open={open} onClose={onClose}>
    <Box sx={styles.box}>
      <Typography textAlign="center" variant="h4" component="h2">
        {content.title}
      </Typography>
      <Typography textAlign="center" sx={{ mt: 2 }}>
        {content.text}
      </Typography>
      <Box sx={styles.controlWrap}>
        <Button variant="contained" onClick={onConfirm} sx={styles.button}>
          Ok
        </Button>
        <Button variant="contained" onClick={onClose} sx={styles.button}>
          Close
        </Button>
      </Box>
    </Box>
  </Modal>
);

export default ConfirmModal;
