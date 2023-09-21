import { Button } from '@mui/material';
import { IEditIconButtonProps } from '../../../types/types';

import styles from './SetDefaultButton.styles';

const SetDefaultButton: React.FC<IEditIconButtonProps> = ({
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
