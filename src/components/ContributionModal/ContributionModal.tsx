import { Container, IconButton, Modal, Paper } from '@mui/material';
import { Close } from '@mui/icons-material';
import { IContributionContent } from '../ModalProvider/type';
import ContributionSlider from '../ContributionSlider/ContributionSlider';
import styles from './ContributionModal.styles';

type ContributionModalProps = {
  open: boolean;
  content: IContributionContent;
  onClose: () => void;
};

const ContributionModal = ({
  open,
  content,
  onClose,
}: ContributionModalProps) => (
  <Modal open={open} onClose={onClose} sx={{ overflow: 'auto' }}>
    <Paper sx={styles.paper}>
      <Container sx={styles.buttonContainer} disableGutters>
        <IconButton onClick={onClose} sx={styles.button}>
          <Close />
        </IconButton>
      </Container>
      <ContributionSlider sliderData={content.sliderData} />
    </Paper>
  </Modal>
);

export default ContributionModal;
