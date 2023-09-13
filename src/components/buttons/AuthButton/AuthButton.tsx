import { Box, Typography } from '@mui/material';
import { IAuthButtonProps } from '../../../types/types';

import styles from './AuthButton.styles';

const AuthButton: React.FC<IAuthButtonProps> = ({
  text,
  icon = null,
}: IAuthButtonProps) => (
  <Box sx={styles.innerBox}>
    {icon}
    <Typography sx={styles.typography}>{text}</Typography>
  </Box>
);

export default AuthButton;
