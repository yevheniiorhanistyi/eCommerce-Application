import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  CardActionArea,
  Box,
  Rating,
  Button,
  Link,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

import calculatePrices from '../../utils/calculatePrices';
import { ProductItemProps } from '../../types/productInterfaces';

import styles from './ProductItem.styles';

export const ProductItem: React.FC<ProductItemProps> = ({
  product,
  itemsInCart,
  addToCard,
  removeFromCart,
}: ProductItemProps) => {
  const [hasMatch, setHasMatch] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { id, key, name, description, masterVariant } = product;
  const imageUrl = masterVariant.images[0].url;
  const price = masterVariant.prices[0];
  const { originalPrice, hasDiscount, discountedPrice } = calculatePrices(price);

  useEffect(() => {
    const matchExists = itemsInCart.some((item) => item.productId === id);
    setHasMatch(matchExists);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsInCart, id]);

  const handleClick = async (productId: string, variantId: number) => {
    setIsDisabled(true);

    try {
      if (hasMatch) {
        await removeFromCart(productId);
      } else {
        await addToCard(productId, variantId);
      }

      setHasMatch(!hasMatch);
    } catch (error) {
      setHasMatch(!hasMatch);
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <Card sx={styles.card}>
      <Link
        to={`/product/${key}`}
        component={RouterLink}
        underline="none"
        color="inherit"
      >
        <CardActionArea sx={styles.cardActionArea}>
          <Box sx={styles.innerBox}>
            <CardMedia
              component="img"
              image={imageUrl}
              alt={name['en-US']}
              sx={styles.cardMedia}
            />
          </Box>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
              sx={styles.typograohyTitle}
            >
              {name['en-US']}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              {description?.['en-US']}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions sx={styles.cardActions}>
        <Typography
          align="center"
          variant="h6"
          color="text.primary"
          sx={styles.typographyPrice}
        >
          {hasDiscount ? (
            <>
              {`${discountedPrice} ${price.value.currencyCode}`}
              <Typography
                component="span"
                variant="body2"
                color="error"
                sx={styles.typographyDiscount}
              >
                {`${originalPrice} ${price.value.currencyCode}`}
              </Typography>
            </>
          ) : (
            `${originalPrice} ${price.value.currencyCode}`
          )}
        </Typography>
        <Rating name={`rating-${key}`} size="small" />
        <Button
          aria-label="Cart button"
          startIcon={
            hasMatch ? <ShoppingCartCheckoutIcon /> : <AddShoppingCartIcon />
          }
          sx={styles.buttonCartControl}
          variant="contained"
          onClick={() => {
            handleClick(id, masterVariant.id);
          }}
          disabled={isDisabled}
        >
          {hasMatch ? 'Remove from Cart' : 'Add to Cart'}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;
