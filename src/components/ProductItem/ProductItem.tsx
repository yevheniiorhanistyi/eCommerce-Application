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
import DeleteIcon from '@mui/icons-material/Delete';
import { Link as RouterLink } from 'react-router-dom';
import { ProductItemProps } from '../../types/productInterfaces';

import styles from './ProductItem.styles';
import theme from '../../theme';

export const ProductItem: React.FC<ProductItemProps> = ({
  keyProduct,
  title,
  description,
  url,
  prices,
}: ProductItemProps) => {
  const fractionDigits = 2;
  const discountedPrice = prices.discounted?.value
    ? (prices.discounted.value.centAmount / 10 ** fractionDigits).toFixed(
      fractionDigits,
    )
    : '';
  const originalPrice = prices.value
    ? (prices.value.centAmount / 10 ** fractionDigits).toFixed(fractionDigits)
    : '';
  const hasDiscount = discountedPrice && discountedPrice !== originalPrice;

  return (
    <Card sx={styles.card}>
      <Link
        to={`/product/${keyProduct}`}
        component={RouterLink}
        underline="none"
        color="inherit"
      >
        <CardActionArea sx={styles.cardActionArea}>
          <Box sx={styles.innerBox}>
            <CardMedia
              component="img"
              image={url}
              alt={title}
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
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              {description}
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
              {`${discountedPrice} ${prices.value.currencyCode}`}
              <Typography
                component="span"
                variant="body2"
                color="error"
                sx={styles.typographyDiscount}
              >
                {`${originalPrice} ${prices.value.currencyCode}`}
              </Typography>
            </>
          ) : (
            `${originalPrice} ${prices.value.currencyCode}`
          )}
        </Typography>
        <Rating name={`rating-${keyProduct}`} size="small" />
        <Button
          aria-label="Button add to cart"
          startIcon={<AddShoppingCartIcon />}
          sx={{
            fontSize: '0.8rem',
            padding: '8px 20px',
            color: theme.palette.primary.main,
          }}
          variant="outlined"
        >
          Add to Cart
        </Button>
        {/* <Button
          aria-label="Button remove from cart"
          startIcon={<DeleteIcon />}
          sx={{
            fontSize: '0.8rem',
            padding: '8px 20px',
          }}
          variant="contained"
        >
          Remove from Cart
        </Button> */}
      </CardActions>
    </Card>
  );
};

export default ProductItem;
