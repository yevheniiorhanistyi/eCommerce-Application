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
      const discountedPrice = lineItem.price.discounted?.value
        ? (
          lineItem.price.discounted.value.centAmount
              / 10 ** lineItem.price.discounted.value.fractionDigits
        ).toFixed(lineItem.price.discounted.value.fractionDigits)
        : '';

      const originalPrice = lineItem.price.value
        ? (
          lineItem.price.value.centAmount
              / 10 ** lineItem.price.value.fractionDigits
        ).toFixed(lineItem.price.value.fractionDigits)
        : '';

      const hasDiscount = discountedPrice && discountedPrice !== originalPrice;

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
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
                sx={styles.typographyTitle}
              >
                {Object.values(lineItem.name)}
              </Typography>
            </CardContent>
            <Container sx={styles.itemPricesWrapper} disableGutters>
              <Typography variant="h6">
                {hasDiscount ? (
                  <>
                    <Typography variant="h6" sx={styles.crossedPrice}>
                      {`${originalPrice} ${lineItem.totalPrice.currencyCode}`}
                    </Typography>
                    {`${discountedPrice} ${lineItem.totalPrice.currencyCode}`}
                  </>
                ) : (
                  `${originalPrice} ${lineItem.totalPrice.currencyCode}`
                )}
              </Typography>
            </Container>
          </Card>
        </ListItem>
      );
    })}
  </List>
));
export default CartItems;
