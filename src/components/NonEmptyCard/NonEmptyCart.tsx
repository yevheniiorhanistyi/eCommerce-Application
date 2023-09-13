import { FC } from 'react';
import { Container, TextField, Typography } from '@mui/material';
import CartItems from '../CartItems/CartItems';
import styles from './NonEmptyCart.styles';
import { INonEmptyCardAProps } from '../../types/types';
import SendIconButton from '../buttons/SendIconButton/SendIconButton';

const NonEmptyCart: FC<INonEmptyCardAProps> = ({
  cartData,
}: INonEmptyCardAProps) => (!cartData ? null : (
  <Container sx={styles.wrapper} disableGutters>
    <Container sx={styles.leftSide} disableGutters>
      <CartItems cartData={cartData} />
    </Container>
    <Container sx={styles.rightSide}>
      <Container sx={styles.rightSideWrapper}>
        <Container sx={styles.summaryWrapper} disableGutters>
          <Typography sx={styles.summaryTitle}>Summary:</Typography>
          <Typography sx={styles.summaryValue}>
            {`${
              cartData.totalPrice.centAmount
                / 10 ** cartData.totalPrice.fractionDigits
            } `}
            {cartData.totalPrice.currencyCode}
          </Typography>
        </Container>
        <Container sx={styles.itemsCountWrapper} disableGutters>
          <Typography sx={styles.itemsCountTitle}>
            {`${cartData.lineItems.length} items - `}
          </Typography>
          <Typography sx={styles.itemsCountValue}>
            {`${
              cartData.totalPrice.centAmount
                / 10 ** cartData.totalPrice.fractionDigits
            } `}
            {cartData.totalPrice.currencyCode}
          </Typography>
        </Container>
        <Container sx={styles.discountWrapper} disableGutters>
          <Typography sx={styles.discountTitle}>Discount</Typography>
          <Typography sx={styles.discounValue}>
            {`- 30 ${cartData.totalPrice.currencyCode}`}
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
));

export default NonEmptyCart;
