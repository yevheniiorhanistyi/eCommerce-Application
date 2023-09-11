import { Container, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import styles from './EmptyCart.styles';

const EmptyCart: React.FC = () => (
  <Container>
    <Container sx={styles.imageWrapper}>
      <img
        src="/src/assets/emptyCart.png"
        alt="Empty cart"
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
