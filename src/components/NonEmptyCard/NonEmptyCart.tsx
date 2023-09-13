import { FC } from 'react';
import { Container, TextField, Typography } from '@mui/material';
import CartItems from '../CartItems/CartItems';
import styles from './NonEmptyCart.styles';
import { INonEmptyCardAProps } from '../../types/types';
import SendIconButton from '../buttons/SendIconButton/SendIconButton';

const NonEmptyCart: FC<INonEmptyCardAProps> = ({
  cartData,
}: INonEmptyCardAProps) => {
  const fractionDigits = 2;

  const convertToFractionalDigits = (value: number): number => {
    return Number((value / 10 ** fractionDigits).toFixed(fractionDigits));
  };

  const summaryDiscount = cartData.lineItems.reduce((acc, lineItem) => {
    const price = lineItem.price.discounted?.value
      ? Number(lineItem.price.value.centAmount) -
        Number(lineItem.price.discounted.value.centAmount)
      : 0;

    return acc + price;
  }, 0);

  const summaryPriceWithoutDiscount = Number(cartData.totalPrice.centAmount);

  const summaryPriceWithDiscount =
    summaryPriceWithoutDiscount - summaryDiscount;

  return !cartData ? null : (
    <Container sx={styles.wrapper} disableGutters>
      <Container sx={styles.leftSide} disableGutters>
        <CartItems cartData={cartData} />
      </Container>
      <Container sx={styles.rightSide}>
        <Container sx={styles.rightSideWrapper}>
          <Container sx={styles.summaryWrapper} disableGutters>
            <Typography sx={styles.summaryTitle}>Summary:</Typography>
            <Typography sx={styles.summaryValue}>
              {`${convertToFractionalDigits(summaryPriceWithDiscount)} ${
                cartData.totalPrice.currencyCode
              }`}
            </Typography>
          </Container>
          <Container sx={styles.itemsCountWrapper} disableGutters>
            <Typography sx={styles.itemsCountTitle}>
              {`${cartData.lineItems.length} items`}
            </Typography>
            <Typography sx={styles.itemsCountValue}>
              {`${convertToFractionalDigits(summaryPriceWithoutDiscount)}
              ${cartData.totalPrice.currencyCode}`}
            </Typography>
          </Container>
          <Container sx={styles.discountWrapper} disableGutters>
            <Typography sx={styles.discountTitle}>Discount</Typography>
            <Typography sx={styles.discounValue}>
              {`- ${convertToFractionalDigits(summaryDiscount)}`}
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
  );
};

export default NonEmptyCart;
