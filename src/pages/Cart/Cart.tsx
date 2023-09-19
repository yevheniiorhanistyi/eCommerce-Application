import { Container, Paper, Typography } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { useEffect, useState } from 'react';
import { Cart } from '@commercetools/platform-sdk';
import { useAuth } from '../../components/AuthProvider/AuthProvider';
import { MessageType } from '../../types/types';
import NonEmptyCart from '../../components/NonEmptyCard/NonEmptyCart';
import getCartById from '../../services/cart/getCartById';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import getIdCartActive from '../../services/cart/getIdCartActive';
import { useCart } from '../../components/CartProvider/CartProvider';
import styles from './Cart.styles';

const CustomerCart: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [cartData, setCartData] = useState<Cart | null>();
  const { updateBadgeContent } = useCart();

  const showSnackbarMessage = (
    messageText: string,
    messageType: MessageType,
    autoHideDuration?: number,
  ) => {
    fetchCartData();
    enqueueSnackbar(messageText, {
      variant: messageType,
      autoHideDuration,
    });
  };
  const onDeleteSuccess = () => {
    showSnackbarMessage('Item succesfully deleted', 'success', 1000);
  };
  const onAddPromoCodeSuccess = () => {
    showSnackbarMessage('Promo code applied successfully', 'success', 1000);
  };
  const onClearSucces = () => {
    showSnackbarMessage('Cart cleared', 'success', 1000);
  };

  useEffect(() => {
    fetchCartData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCartData = async () => {
    const id = await getIdCartActive(isAuthenticated);
    const data = await getCartById(id);
    setCartData(data);
    if (data) {
      updateBadgeContent(data.totalLineItemQuantity || 0);
    }
  };

  const onQuantityChangeSucces = () => {
    fetchCartData();
  };

  if (!cartData) {
    return null;
  }
  if (cartData && !cartData?.lineItems?.length) {
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
  }
  return (
    <Container maxWidth="lg" disableGutters>
      <Paper elevation={0} sx={{ p: 3, mt: 7, mb: 4 }}>
        <Typography variant="h3" align="left" sx={styles.title}>
          Cart
        </Typography>
        <NonEmptyCart
          cartData={cartData as Cart}
          deleteSuccess={onDeleteSuccess}
          quantityChangeSucces={onQuantityChangeSucces}
          addPromoCodeSuccess={onAddPromoCodeSuccess}
          clearSucces={onClearSucces}
        />
      </Paper>
    </Container>
  );
};

export default CustomerCart;
