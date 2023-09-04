import { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Popper,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import StoreIcon from '@mui/icons-material/Store';

import SignInButton from '../buttons/SignInButton/SignInButton';
import SignUpButton from '../buttons/SignUpButton/SignUpButton';
import SignOutButton from '../buttons/SignOutButton/SignOutButton';
import ProfileButton from '../buttons/ProfileButton/ProfileButton';

import CategoryMenu from '../CategoryMenu/CategoryMenu';
import { useAuth } from '../AuthProvider/AuthProvider';

import { removeTokenFromLocalStorage } from '../../utils/authUtils';

import styles from './Header.styles';
import { useCategoryData } from '../CategoryDataProvider/CategoryDataProvider';

const Header: React.FC = () => {
  const { isAuthenticated, setAuthentication } = useAuth();
  const pages = [{ title: 'About Us', route: '/' }];

  const { categoryData } = useCategoryData();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const handleSignOut = () => {
    setAuthentication(false);
    removeTokenFromLocalStorage();
  };

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
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
              <CategoryMenu categoryData={categoryData} />
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Link style={{ textDecoration: 'none' }} to={page.route}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </Link>
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
            <Button
              aria-describedby={id}
              onClick={handleClick}
              sx={styles.closeNavMenu}
            >
              CATALOG
            </Button>
            <Popper id={id} open={open} anchorEl={anchorEl} sx={styles.popper}>
              <CategoryMenu categoryData={categoryData} />
            </Popper>
            {pages.map((page) => (
              <Button
                key={page.title}
                component={Link}
                to={page.route}
                onClick={handleCloseNavMenu}
                sx={styles.closeNavMenu}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Box sx={styles.menuBox}>
            {isAuthenticated ? (
              <>
                <ProfileButton />
                <SignOutButton onSignOutSuccess={handleSignOut} />
              </>
            ) : (
              <>
                <SignInButton />
                <SignUpButton />
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
