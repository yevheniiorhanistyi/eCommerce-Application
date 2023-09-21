import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IProfileButtonProps } from '../../../types/types';

const ProfileButton: React.FC<IProfileButtonProps> = ({
  handleClick,
}: IProfileButtonProps) => (
  <IconButton onClick={handleClick}>
    <AccountCircleIcon sx={{ color: 'common.white' }} />
  </IconButton>
);

export default ProfileButton;
