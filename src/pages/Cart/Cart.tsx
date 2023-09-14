import { Container, Paper, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Cart } from '@commercetools/platform-sdk';
import NonEmptyCart from '../../components/NonEmptyCard/NonEmptyCart';
import styles from './Cart.styles';
import { useAuth } from '../../components/AuthProvider/AuthProvider';
import getCartById from '../../services/cart/getCartById';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import getIdCartActive from '../../services/cart/getIdCartActive';

const CustomerCart: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [cartData, setCartData] = useState<Cart | null>();

  const onDeleteSuccess = () => {
    fetchCartData();
  };

  useEffect(() => {
    fetchCartData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCartData = async () => {
    const id = await getIdCartActive(isAuthenticated);
    const data = await getCartById(id);
    setCartData(data);
  };

  if (!cartData) {
    return null;
  } if (cartData && !cartData?.lineItems.length) {
    return (
      <Container maxWidth="lg" disableGutters>
        <Paper elevation={0} sx={{ p: 3, mt: 7, mb: 4 }}>
          <Typography variant="h3" align="left" sx={styles.title}>
            Cart
          </Typography>
          <EmptyCart />
        </Paper>
      </Container>
    );
  } return (
    <Container maxWidth="lg" disableGutters>
      <Paper elevation={0} sx={{ p: 3, mt: 7, mb: 4 }}>
        <Typography variant="h3" align="left" sx={styles.title}>
          Cart
        </Typography>
        <NonEmptyCart cartData={cartData as Cart} deleteSuccess={onDeleteSuccess} />
      </Paper>
    </Container>
  );
};

export default CustomerCart;
