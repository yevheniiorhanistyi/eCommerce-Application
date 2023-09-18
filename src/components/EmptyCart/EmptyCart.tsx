import { Container, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import emptyCardImg from '../../assets/emptyCart.png';

import styles from './EmptyCart.styles';

const EmptyCart: React.FC = () => (
  <Container>
    <Container sx={styles.imageWrapper}>
      <img src={emptyCardImg} alt="Empty cart" style={styles.emptyCartImage} />
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
