import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { IEditIconButtonProps } from '../../../types/types';

import styles from './SendIconButton.styles';

interface ISendIconButtonProps {
  callback: () => void;
}

const SendIconButton: React.FC<ISendIconButtonProps> = ({
  callback,
}: IEditIconButtonProps) => {
  const handleClick = () => {
    callback();
  };

  return (
    <Button
      variant="contained"
      onClick={handleClick}
      sx={styles.sendIconButton}
      startIcon={<SendIcon sx={styles.icon} />}
    />
  );
};

export default SendIconButton;
