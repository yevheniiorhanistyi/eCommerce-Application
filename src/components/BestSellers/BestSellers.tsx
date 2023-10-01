import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Link,
} from '@mui/material';

import { IProduct } from '../../types/productInterfaces';
import {
  initialSearchParams,
  FEATURED_CLOTHING_CATEGORY_ID,
} from '../../constants/constants';
import { getProductByParams } from '../../services/products/getProductByParams';

import styles from './BestSellers.style';

export const BestSellers: React.FC = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        getProductByParams(
          FEATURED_CLOTHING_CATEGORY_ID,
          initialSearchParams,
        ).then((response) => {
          setProductList(response.results);
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [FEATURED_CLOTHING_CATEGORY_ID, initialSearchParams]);

  return (
    <Box sx={styles.outerBox}>
      <Typography variant="h4" align="center" sx={styles.title}>
        Featured Products
      </Typography>
      <Box sx={styles.innerBox}>
        {productList.map((product) => (
          <Card key={product.key} sx={styles.card}>
            <Link
              to={`/product/${product.key}`}
              component={RouterLink}
              underline="none"
              color="inherit"
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={product.masterVariant.images[0].url}
                  alt="green iguana"
                  sx={styles.cardMedia}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name['en-US']}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description?.['en-US']}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default BestSellers;
