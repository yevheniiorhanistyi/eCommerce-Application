import React from 'react';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';

import { Link } from 'react-router-dom';
import styles from './SignInButton.styles';

const SignInButton: React.FC = () => (
  <Link to="/signin" style={{ textDecoration: 'none' }}>
    <Button
      startIcon={<LoginIcon />}
      variant="text"
      sx={styles.button}
    >
      Sign in
    </Button>
  </Link>
);

export default SignInButton;
