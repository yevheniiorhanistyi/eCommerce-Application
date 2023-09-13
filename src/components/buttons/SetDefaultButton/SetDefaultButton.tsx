import { FC } from 'react';
import { Button } from '@mui/material';
import styles from './SetDefaultButton.styles';
import { IEditIconButtonProps } from '../../../types/types';

const SetDefaultButton: FC<IEditIconButtonProps> = ({
  callback,
}: IEditIconButtonProps) => {
  const handleClick = () => {
    callback();
  };

  return (
    <Button onClick={handleClick} variant="text" sx={styles.setDefaultButton}>
      Set as default
    </Button>
  );
};

export default SetDefaultButton;
