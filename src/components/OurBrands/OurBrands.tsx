import { Box } from '@mui/material';
import { motion } from 'framer-motion';

import reiLogo from '../../assets/brands/rei-logo.png';
import athletaLogo from '../../assets/brands/athleta.png';
import kuhlLogo from '../../assets/brands/kuhl.png';
import patagoniaLogo from '../../assets/brands/patagonia.png';
import { itemAnimation } from '../../utils/animations';

import styles from './OurBrands.style';

export const OurBrands: React.FC = () => {
  const allBrands = [
    { brandSrc: reiLogo, alt: 'REI' },
    { brandSrc: patagoniaLogo, alt: 'Patagonia' },
    { brandSrc: athletaLogo, alt: 'Athleta' },
    { brandSrc: kuhlLogo, alt: 'Kuhl' },
  ];

  return (
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5 }}
      sx={styles.outerBox}
    >
      {allBrands.map((brand, index) => (
        <motion.img
          custom={index + 1}
          variants={itemAnimation}
          key={brand.alt}
          src={brand.brandSrc}
          alt={brand.alt}
          style={styles.image}
        />
      ))}
    </Box>
  );
};

export default OurBrands;
