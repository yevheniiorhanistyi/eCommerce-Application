import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { IEditIconButtonProps } from '../../../types/types';

import styles from './EditiconButton.styles';

const EditIconButton: React.FC<IEditIconButtonProps> = ({
  callback,
}: IEditIconButtonProps) => {
  const handleClick = () => {
    callback();
  };

  return (
    <Button
      onClick={handleClick}
      sx={styles.editButton}
      variant="outlined"
      startIcon={<EditIcon sx={styles.editButtonIcon} />}
    />
  );
};

export default EditIconButton;
