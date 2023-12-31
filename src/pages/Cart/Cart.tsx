import { useEffect, useState } from 'react';

import { Container, Paper, Typography } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { Cart } from '@commercetools/platform-sdk';

import { useAuth } from '../../components/AuthProvider/AuthProvider';
import { useCart } from '../../components/CartProvider/CartProvider';
import { MessageType } from '../../types/types';
import NonEmptyCart from '../../components/NonEmptyCard/NonEmptyCart';
import getCartById from '../../services/cart/getCartById';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import getIdCartActive from '../../services/cart/getIdCartActive';
import CartDataLoader from '../../components/CartDataLoader/CartDataLoader';

import styles from './Cart.styles';

const CustomerCart: React.FC = () => {
  const [cartData, setCartData] = useState<Cart | null>();
  const [isLoading, setIsLoading] = useState(true);
  const { isAuthenticated } = useAuth();
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
  }, [isLoading]);

  const fetchCartData = async () => {
    const id = await getIdCartActive(isAuthenticated);
    const data = await getCartById(id);
    setCartData(data);
    setIsLoading(false);
    if (data) {
      updateBadgeContent(data.totalLineItemQuantity || 0);
    }
  };

  const onQuantityChangeSucces = () => {
    fetchCartData();
  };

  if (isLoading) {
    return (
      <Container maxWidth="lg" disableGutters>
        <CartDataLoader />
      </Container>
    );
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
