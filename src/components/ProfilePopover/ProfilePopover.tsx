import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Popover,
  Box,
  Divider,
  List,
  ListItemText,
  ListItemButton,
  Typography,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

import { useAuth } from '../AuthProvider/AuthProvider';
import { getUserData, removeUserData } from '../../utils/userDataUtils';
import { removeTokenFromLocalStorage } from '../../utils/authUtils';
import AuthButton from '../buttons/AuthButton/AuthButton';
import AvatarButton from '../buttons/ProfileButton/ProfileButton';

import styles from './ProfilePopover.styles';

const ProfilePopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const { isAuthenticated, setAuthentication } = useAuth();
  const { firstName, lastName, email } = getUserData();
  const fullName = `${firstName} ${lastName}`;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    setAuthentication(false);
    removeTokenFromLocalStorage();
    removeUserData();
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <AvatarButton aria-describedby={id} handleClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Box sx={styles.outerBox}>
          <List sx={styles.list} component="nav" aria-label="mailbox folders">
            {isAuthenticated ? (
              <>
                <ListItemText>
                  <Typography sx={styles.typographyUserData}>
                    {fullName}
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography sx={styles.typographyUserMail}>
                    {email}
                  </Typography>
                </ListItemText>
                <Divider />
                <Link to="/" style={styles.link}>
                  <ListItemButton sx={styles.buttonAuthenticated}>
                    <AuthButton text="Home" />
                  </ListItemButton>
                </Link>
                <Link to="/profile" style={styles.link}>
                  <ListItemButton sx={styles.buttonAuthenticated}>
                    <AuthButton text="Profile" />
                  </ListItemButton>
                </Link>
                <Divider />
                <ListItemButton
                  sx={styles.buttonAuthenticated}
                  onClick={handleSignOut}
                >
                  <AuthButton text="Sign out" />
                </ListItemButton>
              </>
            ) : (
              <>
                <Link to="/signin" style={styles.link}>
                  <ListItemButton onClick={handleClose} sx={styles.button}>
                    <AuthButton
                      text="Sign in"
                      icon={<AccountCircleIcon sx={styles.icon} />}
                    />
                  </ListItemButton>
                </Link>
                <Link to="/signup" style={styles.link}>
                  <ListItemButton onClick={handleClose} sx={styles.button}>
                    <AuthButton
                      text="Sign up"
                      icon={<VpnKeyIcon sx={styles.icon} />}
                    />
                  </ListItemButton>
                </Link>
              </>
            )}
          </List>
        </Box>
      </Popover>
    </>
  );
};

export default ProfilePopover;
