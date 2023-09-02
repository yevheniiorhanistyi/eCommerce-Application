import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import styles from './EditiconButton.styles';

const EditIconButton: React.FC = () => (
  <Button
    sx={styles.editButton}
    startIcon={<EditIcon sx={styles.editButtonIcon} />}
    variant="outlined"
  />
);

export default EditIconButton;
