import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Toolbar, Typography } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';

import FooterAccordion from './FooterAccordion';
import {
  MIN_WINDOW_WIDTH,
  COMPANY_NAVIGATION_ITEMS,
  ACCOUNT_NAVIGATION_ITEMS,
  CONTACT_DETAILS,
} from './constants/footerConstants';

import styles from './Footer.styles';

const Footer: React.FC = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box sx={styles.footerContainer}>
      <Container maxWidth="xl">
        {windowWidth > MIN_WINDOW_WIDTH ? (
          <Toolbar disableGutters>
            <Box sx={styles.toolbar}>
              <Box sx={styles.companySection}>
                <StoreIcon sx={styles.storeIcon} />
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Typography variant="h6" noWrap sx={styles.companyLink}>
                    BUYIT
                  </Typography>
                </Link>
                <Typography color="white" sx={styles.companyDescription}>
                  Welcome to BUYIT - your fashionable online marketplace for
                  clothing shopping! Explore a wide range of stylish clothing
                  and accessories. Shop the latest trends, discover unique
                  items, and refresh your wardrobe with BUYIT. Online shopping
                  made easier and more enjoyable with us.
                </Typography>
              </Box>
              <Box sx={styles.navigationSection}>
                <Link to="/catalog" style={{ textDecoration: 'none' }}>
                  <Typography variant="h6" noWrap sx={styles.navigationLink}>
                    COMPANY
                  </Typography>
                </Link>
                {COMPANY_NAVIGATION_ITEMS.map((item) => (
                  <Link
                    key={item.text}
                    to={item.link}
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography variant="h6" noWrap sx={styles.navigationItem}>
                      {item.text}
                    </Typography>
                  </Link>
                ))}
              </Box>
              <Box sx={styles.navigationSection}>
                <Link to="/profile" style={{ textDecoration: 'none' }}>
                  <Typography variant="h6" noWrap sx={styles.navigationLink}>
                    CUSTOM CARE
                  </Typography>
                </Link>
                {ACCOUNT_NAVIGATION_ITEMS.map((item) => (
                  <Link
                    key={item.text}
                    to={item.link}
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography variant="h6" noWrap sx={styles.navigationItem}>
                      {item.text}
                    </Typography>
                  </Link>
                ))}
              </Box>
              <Box sx={styles.navigationSection}>
                <Link to="#" style={{ textDecoration: 'none' }}>
                  <Typography variant="h6" noWrap sx={styles.navigationLink}>
                    Store information
                  </Typography>
                </Link>
                {CONTACT_DETAILS.map((info) => (
                  <Link
                    to={info.link || '#'}
                    style={{ textDecoration: 'none' }}
                    key={info.label}
                  >
                    <Box sx={styles.storeInfoItem}>
                      {info.icon && info.icon}
                      <Typography
                        variant="h6"
                        noWrap
                        sx={styles.navigationItem}
                      >
                        {info.value}
                      </Typography>
                    </Box>
                  </Link>
                ))}
              </Box>
            </Box>
          </Toolbar>
        ) : (
          <FooterAccordion />
        )}
      </Container>
    </Box>
  );
};
export default Footer;
