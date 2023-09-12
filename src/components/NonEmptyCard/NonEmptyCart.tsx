import { FC } from 'react';
import { Box, Container, TextField } from '@mui/material';
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
        <Container sx={styles.summaryPrice}>
          <Box component="span" sx={styles.summaryTitle}>
            Summary:
          </Box>
          <Box component="span" sx={styles.summaryValue}>
            {` ${
              cartData.totalPrice.centAmount
                / 10 ** cartData.totalPrice.fractionDigits
            } `}
            {cartData.totalPrice.currencyCode}
          </Box>
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
