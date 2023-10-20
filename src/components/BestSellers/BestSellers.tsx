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
import { motion } from 'framer-motion';

import { IProduct } from '../../types/productInterfaces';
import { itemAnimation, textAnimation } from '../../utils/animations';
import { getProductByParams } from '../../services/products/getProductByParams';
import {
  initialSearchParams,
  FEATURED_CLOTHING_CATEGORY_ID,
} from '../../constants/constants';

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
    <Box
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      sx={styles.outerBox}
    >
      <Typography
        variant="h4"
        align="center"
        sx={styles.title}
        custom={1}
        component={motion.h4}
        variants={textAnimation}
      >
        Featured Products
      </Typography>
      <Box
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        sx={styles.innerBox}
      >
        {productList.map((product, index) => (
          <Card
            custom={index + 1}
            component={motion.div}
            variants={itemAnimation}
            key={product.key}
            sx={styles.card}
          >
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
