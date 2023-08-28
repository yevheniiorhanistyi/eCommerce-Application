import * as React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  CardActionArea,
  Box,
  Rating,
} from '@mui/material';
import { IPrice } from '../../types/productInterfaces';

import styles from './ProductItem.styles';

type ProductItemProps = {
  title: string;
  description: string;
  url: string;
  prices: IPrice;
};

export const ProductItem: React.FC<ProductItemProps> = ({
  title,
  description,
  url,
  prices,
}) => {
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
        <Rating name="size-small" size="small" />
      </CardActions>
    </Card>
  );
};

export default ProductItem;
