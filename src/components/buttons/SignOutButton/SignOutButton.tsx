import React from 'react';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import styles from './SignOutButton.styles';
import { ISignOutButtonProps } from '../../../types/types';

const SignInButton: React.FC<ISignOutButtonProps> = ({
  onSignOutSuccess,
}: ISignOutButtonProps) => (
  <Link to="/" style={{ textDecoration: 'none' }}>
    <Button
      startIcon={(
        <LogoutIcon
          sx={styles.logoutIcon}
        />
)}
      variant="text"
      sx={styles.button}
      onClick={onSignOutSuccess}
    >
      Sign out
    </Button>
  </Link>
);

export default SignInButton;
