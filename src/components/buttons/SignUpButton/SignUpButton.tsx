import React from 'react';
import Button from '@mui/material/Button';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

import { Link } from 'react-router-dom';
import styles from './SignUpButton.styles';

const SignUpButton: React.FC = () => (
  <Link to="/signup" style={{ textDecoration: 'none' }}>
    <Button
      startIcon={(
        <VpnKeyIcon
          sx={styles.vpnKeyIcon}
        />
)}
      variant="outlined"
      sx={styles.button}
    >
      Sign up
    </Button>
  </Link>
);

export default SignUpButton;
