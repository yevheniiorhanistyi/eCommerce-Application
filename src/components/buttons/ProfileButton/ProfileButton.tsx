import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IProfileButtonProps } from '../../../types/types';

import styles from './ProfileButton.styles';

const ProfileButton: React.FC<IProfileButtonProps> = ({
  handleClick,
}: IProfileButtonProps) => (
  <IconButton onClick={handleClick}>
    <AccountCircleIcon sx={styles.icon} />
  </IconButton>
);

export default ProfileButton;
