import { CSSProperties } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

import imgSrc from '../../assets/image_08_2048x871_crop_top.webp';
import { textAnimation } from '../../utils/animations';

import styles from './FeatureBanner.styles';

export const FeatureBanner: React.FC = () => (
  <Box
    component={motion.section}
    initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.5 }}
    sx={styles.outerBox}
  >
    <img
      style={styles.image as CSSProperties}
      src={imgSrc}
      alt="Feature Banner"
    />
    <Box sx={styles.innerBox}>
      <Typography
        component={motion.h4}
        custom={1}
        variants={textAnimation}
        sx={styles.title}
      >
        Simple, Comfy and Practical!
      </Typography>
      <Typography
        component={motion.p}
        custom={2.5}
        variants={textAnimation}
        variant="subtitle1"
        color="white"
        sx={styles.subtitle}
      >
        Comfy clothes are actually really trendy. Make your weekend plans a lot
        more stylish with our comfortable outfit ideas. Our comfortable clothes
        come in many styles & colors.
      </Typography>
    </Box>
  </Box>
);

export default FeatureBanner;
