import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styles from './DeleteIconButton.styles';

const DeleteIconButton: React.FC = () => {
  const handleClick = () => {};

  return (
    <Button
      sx={styles.deleteButton}
      startIcon={<DeleteOutlineIcon sx={styles.deleteButtonIcon} />}
      variant="outlined"
      onClick={handleClick}
    />
  );
};

export default DeleteIconButton;
