import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import styles from './EditiconButton.styles';
import { useModal } from '../../ModalProvider/ModalProvider';

const EditIconButton: React.FC = () => {
  const { openModal } = useModal();

  return (
    <Button
      sx={styles.editButton}
      startIcon={<EditIcon sx={styles.editButtonIcon} />}
      variant="outlined"
      onClick={openModal}
    />
  );
};

export default EditIconButton;
