import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

import imgSrc from '../../assets/BANNER_DESKTOP_2000x.webp';

import styles from './PreviewBanner.style';

export const PreviewBanner: React.FC = () => (
  <Box sx={styles.outerBox}>
    <img style={styles.img as CSSProperties} src={imgSrc} alt="Banner" />
    <Box sx={styles.innerBox}>
      <Typography sx={styles.title}>Discover New Fashion</Typography>
      <Button component={Link} to="/catalog" sx={styles.button}>
        Shop now
      </Button>
    </Box>
  </Box>
);

export default PreviewBanner;
