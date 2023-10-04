import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import styles from './PrimaryLayout.style';

const PrimaryLayout: React.FC = () => (
  <>
    <Header />
    <Box sx={styles.main}>
      <Outlet />
    </Box>
    <Footer />
  </>
);

export default PrimaryLayout;
