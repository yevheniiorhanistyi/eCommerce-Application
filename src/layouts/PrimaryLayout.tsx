import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from '../components/Header/Header';
import styles from './PrimaryLayout.style';

const PrimaryLayout: React.FC = () => (
  <>
    <Header />
    <Box component="main" sx={styles.main}>
      <Outlet />
    </Box>
  </>
);

export default PrimaryLayout;
