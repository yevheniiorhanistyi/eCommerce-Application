import { Link as RouterLink } from 'react-router-dom';
import { FC } from 'react';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
  Link,
  ListItem,
  List,
  Container,
} from '@mui/material';

import styles from './CartItems.styles';
import { INonEmptyCardAProps } from '../../types/types';

const CartItems: FC<INonEmptyCardAProps> = ({
  cartData,
}: INonEmptyCardAProps) => (!cartData ? null : (
  <List>
    {cartData.lineItems.map((lineItem) => {
      const fractionDigits = 2;
      const discountedPrice: string = lineItem.price.discounted?.value
        ? (
          lineItem.price.discounted.value.centAmount
              / 10 ** fractionDigits
        ).toFixed(fractionDigits)
        : '';

      const originalPrice: string = lineItem.price.value
        ? (
          lineItem.price.value.centAmount
              / 10 ** lineItem.price.value.fractionDigits
        ).toFixed(lineItem.price.value.fractionDigits)
        : '';

      const hasDiscount: string | boolean = discountedPrice && discountedPrice !== originalPrice;

      return (
        <ListItem key={lineItem.id} sx={styles.listItem}>
          <Card sx={styles.card}>
            <Link
              to={`/product/${lineItem.productKey}`}
              component={RouterLink}
              underline="none"
              color="inherit"
            >
              <CardActionArea>
                <Box sx={styles.innerBox}>
                  <CardMedia
                    component="img"
                    image={
                        lineItem.variant.images
                          ? lineItem.variant.images[0].url
                          : 'No image available'
                      }
                    alt={lineItem.productKey}
                    sx={styles.cardMedia}
                  />
                </Box>
              </CardActionArea>
            </Link>
            <Container sx={styles.cartItemDescription} disableGutters>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={styles.typographyTitle}
                >
                  {Object.values(lineItem.name)}
                </Typography>
              </CardContent>
              <Container sx={styles.itemPricesWrapper} disableGutters>
                <Container disableGutters>
                  {hasDiscount ? (
                    <>
                      <Typography sx={styles.crossedPrice}>
                        {`${originalPrice} ${lineItem.totalPrice.currencyCode}`}
                      </Typography>
                      <Typography sx={styles.originalPrice}>
                        {`${discountedPrice} ${lineItem.totalPrice.currencyCode}`}
                      </Typography>
                    </>
                  ) : (
                    <Typography sx={styles.originalPrice}>
                      {`${originalPrice} ${lineItem.totalPrice.currencyCode}`}
                    </Typography>
                  )}
                </Container>
              </Container>
            </Container>
          </Card>
        </ListItem>
      );
    })}
  </List>
));

export default CartItems;
