import { Box, Typography } from '@mui/material';

import styles from './AboutUs.styles';

const AboutUs: React.FC = () => (
  <Box sx={styles.outerBox}>
    <Typography variant="h3" sx={styles.title}>
      About Us
    </Typography>
  </Box>
);

export default AboutUs;
