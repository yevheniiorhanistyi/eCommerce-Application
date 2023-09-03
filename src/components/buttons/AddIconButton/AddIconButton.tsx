import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import styles from './AddIconButton.styles';
import { useModal } from '../../ModalProvider/ModalProvider';

const AddIconButton: React.FC = ({ content }) => {
  const modal = useModal();

  const handleClick = () => {
    modal.openModal('addInfo');
    modal.setContent('addInfo', content);
  };
  
  return (
    <Button
      sx={styles.addButton}
      variant="outlined"
      startIcon={<AddIcon sx={styles.addIcon} onClick={handleClick} />}
    >
      Add
    </Button>
  );
};

export default AddIconButton;
