import { Box, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import CartItems from '../CartItems/CartItems';
import { INonEmptyCardAProps } from '../../types/types';
import { useAuth } from '../AuthProvider/AuthProvider';
import SendIconButton from '../buttons/SendIconButton/SendIconButton';
import formatPrice from '../../utils/formatPrice';

import ClearCart from '../ClearCart/ClearCart';
import addPromoCode from '../../services/cart/cartPromoCode/addPromoCode';
import getIdCartActive from '../../services/cart/getIdCartActive';
import getCartById from '../../services/cart/getCartById';

import styles from './NonEmptyCart.styles';

const NonEmptyCart: React.FC<INonEmptyCardAProps> = ({
  cartData,
  deleteSuccess,
  quantityChangeSucces,
  addPromoCodeSuccess,
  clearSucces,
}: INonEmptyCardAProps) => {
  const [promoCode, setPromoCode] = useState('');
  const { isAuthenticated } = useAuth();
  const summaryPriceWithoutDiscount = cartData.lineItems.reduce((acc, item) => {
    const original = item.price.value.centAmount * item.quantity;
    return acc + original;
  }, 0);

  const summaryPriceWithDiscount = cartData.totalPrice.centAmount;
  const discount = summaryPriceWithDiscount - summaryPriceWithoutDiscount;
  const addActivePromoCode = async () => {
    const activeCartId = await getIdCartActive(isAuthenticated);
    const activeCart = await getCartById(activeCartId);
    if (activeCart) {
      try {
        const { id, version } = activeCart;
        await addPromoCode(id, version, promoCode.toUpperCase());
        addPromoCodeSuccess();
      } catch (error) {
        if (error instanceof Error) enqueueSnackbar(error.message, { variant: 'error' });
      } finally {
        setPromoCode('');
      }
    }
  };

  return !cartData ? null : (
    <Container disableGutters>
      <Container sx={styles.wrapper} disableGutters>
        <Container disableGutters>
          <CartItems
            cartData={cartData}
            deleteSuccess={deleteSuccess}
            quantityChangeSucces={quantityChangeSucces}
            addPromoCodeSuccess={addActivePromoCode}
          />
        </Container>
        <Container sx={styles.rightSide}>
          <Container sx={styles.rightSideWrapper}>
            <Container sx={styles.summaryWrapper} disableGutters>
              <Typography sx={styles.summaryTitle}>Summary:</Typography>
              <Typography sx={styles.summaryValue}>
                {formatPrice(summaryPriceWithDiscount)}
              </Typography>
            </Container>
            <Container sx={styles.itemsCountWrapper} disableGutters>
              <Typography sx={styles.itemsCountTitle}>
                {`${cartData.lineItems.length} items`}
              </Typography>
              <Typography sx={styles.itemsCountValue}>
                {formatPrice(summaryPriceWithoutDiscount)}
              </Typography>
            </Container>
            <Container sx={styles.discountWrapper} disableGutters>
              <Typography sx={styles.discountTitle}>Discount</Typography>
              <Typography sx={styles.discounValue}>
                {formatPrice(discount)}
              </Typography>
            </Container>
          </Container>
          <Container sx={styles.promocode} disableGutters>
            <TextField
              sx={styles.promoInput}
              id="outlined-basic"
              label="Enter promocode"
              variant="outlined"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <SendIconButton callback={addActivePromoCode} />
          </Container>
        </Container>
      </Container>
      <Box sx={styles.clearWrap}>
        <ClearCart cartData={cartData} clearSuccess={clearSucces} />
      </Box>
    </Container>
  );
};

export default NonEmptyCart;
