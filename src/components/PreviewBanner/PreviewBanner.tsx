import { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

import imgSrc from '../../assets/BANNER_DESKTOP_2000x.webp';
import { imageAnimation, textAnimation } from '../../utils/animations';

import styles from './PreviewBanner.style';

export const PreviewBanner: React.FC = () => (
  <Box
    component={motion.section}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    sx={styles.outerBox}
  >
    <motion.img
      style={styles.img as CSSProperties}
      variants={imageAnimation}
      transition={{ delay: 0.2, duration: 0.5 }}
      src={imgSrc}
      alt="Banner"
    />
    <Box sx={styles.innerBox}>
      <Typography
        custom={2.5}
        component={motion.h1}
        variants={textAnimation}
        sx={styles.title}
      >
        Discover New Fashion
      </Typography>
      <Box
        custom={4.5}
        component={motion.div}
        variants={textAnimation}
        sx={{ textAlign: 'center' }}
      >
        <Button component={Link} to="/catalog" sx={styles.button}>
          Shop now
        </Button>
      </Box>
    </Box>
  </Box>
);

export default PreviewBanner;
