import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import styles from './EditiconButton.styles';
import { useModal } from '../../ModalProvider/ModalProvider';

const EditIconButton: React.FC = ({content}) => {
  const modal = useModal();
  console.log('editiconbuttoncontent', content);

  const handleClick = () => {
    modal.openModal('editInfo');
    modal.setContent('editInfo', content);
  };

  return (
    <Button
      sx={styles.editButton}
      startIcon={<EditIcon sx={styles.editButtonIcon} />}
      variant="outlined"
      onClick={handleClick}
    />
  );
};

export default EditIconButton;
