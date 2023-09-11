import {
  Container, Paper, Typography,
} from '@mui/material';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import NonEmptyCart from '../../components/NonEmptyCard/NonEmptyCart';
import styles from './Cart.styles';

const Cart: React.FC = () => (
  <Container maxWidth="lg" disableGutters>
    <Paper elevation={0} sx={{ p: 3, mt: 7, mb: 4 }}>
      <Typography variant="h3" align="left" sx={styles.title}>
        Cart
      </Typography>
      <NonEmptyCart />
    </Paper>
  </Container>
);
export default Cart;
