import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import StoreIcon from '@mui/icons-material/Store';
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

import { Link } from 'react-router-dom';
import styles from './Header.styles';

const pages = ['Catalog', 'About Us'];

const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StoreIcon sx={styles.storeIcon} />
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography variant="h6" noWrap sx={[styles.typo, styles.typoH6]}>
              BUYIT
            </Typography>
          </Link>

          <Box sx={styles.navMenuBoxFlex}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={styles.menubar}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <StoreIcon sx={styles.storeIconFlex} />
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Typography variant="h5" noWrap sx={[styles.typo, styles.typoH5]}>
              BUYIT
            </Typography>
          </Link>
          <Box sx={styles.navMenuBox}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={styles.closeNavMenu}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={styles.menuBox}>
            <Link to="/signin" style={{ textDecoration: 'none' }}>
              <Button
                startIcon={<LoginIcon />}
                variant="text"
                sx={styles.button}
              >
                Sign in
              </Button>
            </Link>
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <Button
                startIcon={<VpnKeyIcon />}
                variant="outlined"
                sx={styles.button}
              >
                Sign up
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
