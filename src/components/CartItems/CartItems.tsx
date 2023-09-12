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
} from '@mui/material';

import styles from './CartItems.styles';
import { INonEmptyCardAProps } from '../../types/types';

const CartItems: FC<INonEmptyCardAProps> = ({
  cartData,
}: INonEmptyCardAProps) => (!cartData ? null : (
  <List>
    {cartData.lineItems.map((lineItem) => (
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
          <Typography
            variant="h6"
            color="text.primary"
            sx={styles.typographyPrice}
          >
            {` ${
              lineItem.totalPrice.centAmount
                / 10 ** lineItem.totalPrice.fractionDigits
            } `}
            {lineItem.totalPrice.currencyCode}
          </Typography>
        </Card>
      </ListItem>
    ))}
  </List>
));
export default CartItems;
