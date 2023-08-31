import React from 'react';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Link } from 'react-router-dom';
import styles from './ProfileButton.styles';

const ProfileButton: React.FC = () => (
  <Link to="/profile" style={{ textDecoration: 'none' }}>
    <Button
      startIcon={(
        <AccountCircleIcon
          sx={styles.loginIcon}
        />
)}
      variant="text"
      sx={styles.button}
    >
      Profile
    </Button>
  </Link>
);

export default ProfileButton;
