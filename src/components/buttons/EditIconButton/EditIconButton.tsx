import { FC } from 'react';
import { Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import styles from './EditiconButton.styles';
import { IEditIconButtonProps } from '../../../types/types';

const EditIconButton: FC<IEditIconButtonProps> = ({
  callback,
  index,
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
