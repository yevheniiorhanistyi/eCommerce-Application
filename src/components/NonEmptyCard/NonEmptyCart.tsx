import { Box, Container, TextField, Typography } from '@mui/material';
import CartItems from '../CartItems/CartItems';
import styles from './NonEmptyCart.styles';
import { INonEmptyCardAProps } from '../../types/types';
import SendIconButton from '../buttons/SendIconButton/SendIconButton';
import formatPrice from '../../utils/formatPrice';
import ClearCart from '../ClearCart/ClearCart';

const NonEmptyCart: React.FC<INonEmptyCardAProps> = ({
  cartData,
  deleteSuccess,
  quantityChangeSucces,
}: INonEmptyCardAProps) => {
  const summaryDiscount = cartData.lineItems.reduce((acc, lineItem) => {
    const discounted = lineItem.price.discounted?.value.centAmount;
    const original = lineItem.price.value.centAmount;
    const price = discounted ? discounted - original : 0;

    return acc + price;
  }, 0);

  const summaryPriceWithDiscount = cartData.totalPrice.centAmount;

  const summaryPriceWithoutDiscount = summaryPriceWithDiscount - summaryDiscount;

  return !cartData ? null : (
    <Container>
      <Container sx={styles.wrapper} disableGutters>
        <Container disableGutters>
          <CartItems
            cartData={cartData}
            deleteSuccess={deleteSuccess}
            quantityChangeSucces={quantityChangeSucces}
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
                {formatPrice(summaryDiscount)}
              </Typography>
            </Container>
          </Container>
          <Container sx={styles.promocode} disableGutters>
            <TextField
              sx={styles.promoInput}
              id="outlined-basic"
              label="Enter promocode"
              variant="outlined"
            />
            <SendIconButton
              callback={() => ({
                message: 'This is a message',
              })}
            />
          </Container>
        </Container>
      </Container>
      <Box sx={styles.clearWrap}>
        <ClearCart clearSuccess={() => {}} />
      </Box>
    </Container>
  );
};

export default NonEmptyCart;
