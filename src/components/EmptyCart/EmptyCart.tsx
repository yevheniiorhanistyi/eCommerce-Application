import { Container, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import emptyCardImg from '../../assets/emptyCart.png';

import 'react-lazy-load-image-component/src/effects/opacity.css';

import styles from './EmptyCart.styles';

const EmptyCart: React.FC = () => (
  <Container>
    <Container sx={styles.imageWrapper}>
      <LazyLoadImage
        width={278}
        height={240}
        src={emptyCardImg}
        alt="Empty cart"
        effect="opacity"
        style={styles.emptyCartImage}
      />
    </Container>
    <Typography variant="h6" align="center">
      You don&apos;t have any items in your cart yet,
    </Typography>
    <Typography variant="h6" align="center">
      you can choose them&#x20;
      <Link underline="hover" to="/catalog" component={RouterLink}>
        here
      </Link>
    </Typography>
  </Container>
);

export default EmptyCart;
