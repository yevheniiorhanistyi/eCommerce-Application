import { Link as RouterLink } from 'react-router-dom';

import {
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
import DeleteCartItemButton from '../DeleteCartItemButton/DeleteCartItemButton';
import parsingPrice from '../../utils/parsingPrice';
import languageCode from '../../utils/languageCode';

const CartItems: React.FC<INonEmptyCardAProps> = ({
  cartData,
  deleteSuccess,
}: INonEmptyCardAProps) => (!cartData ? null : (
  <List>
    {cartData.lineItems.map((lineItem) => {
      const original = lineItem.price.value;
      const discounted = lineItem.price.discounted?.value;
      const discPerQty = lineItem.discountedPricePerQuantity.length > 0
        ? lineItem.discountedPricePerQuantity[0].discountedPrice.value
        : undefined;

      const discountedPrice = discounted ? parsingPrice(discounted) : '';
      const discPriceByPromo = discPerQty ? parsingPrice(discPerQty) : '';
      const originalPrice = parsingPrice(original);

      const hasDiscount: string | boolean = (discPriceByPromo && discPriceByPromo !== originalPrice)
        || (discountedPrice && discountedPrice !== originalPrice);
      return (
        <ListItem key={lineItem.id} sx={styles.listItem}>
          <Container sx={styles.card} disableGutters>
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
            <Container sx={styles.descriptionWrapper} disableGutters>
              <Container sx={styles.cartItemDescription}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={styles.typographyTitle}
                  >
                    {lineItem.name[languageCode]}
                  </Typography>
                </CardContent>
                <Container sx={styles.itemPricesWrapper} disableGutters>
                  <Container sx={styles.descriptionPrices} disableGutters>
                    {hasDiscount ? (
                      <>
                        <Typography sx={styles.crossedPrice}>
                          {originalPrice}
                        </Typography>
                        <Typography sx={styles.originalPrice}>
                          {discPriceByPromo || discountedPrice}
                        </Typography>
                      </>
                    ) : (
                      <Typography sx={styles.originalPrice}>
                        {originalPrice}
                      </Typography>
                    )}
                  </Container>
                </Container>
              </Container>
              <Container sx={styles.cartItemActions}>
                <DeleteCartItemButton
                  product={lineItem}
                  deleteSuccess={deleteSuccess}
                />
              </Container>
            </Container>
          </Container>
        </ListItem>
      );
    })}
  </List>
));

export default CartItems;
