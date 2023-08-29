import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import CircularIndeterminate from '../CircularInterminate/CircularInterminate';
import { getProducts } from '../../services/products/getProducts';
import { ProductItem } from '../ProductItem/ProductItem';
import { IProduct } from '../../types/productInterfaces';

import styles from './ProductList.styles';

const ProductList: React.FC = () => {
  const [productList, setProductList] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        getProducts().then((res) => {
          setProductList(res);
          setIsLoading(false);
        });
      } catch (error) {
        console.error(error);
        setIsLoading(true);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isLoading ? (
    <Box position="fixed" sx={styles.circularIndeterminateBox}>
      <CircularIndeterminate />
    </Box>
  ) : (
    <Box sx={styles.productListBox}>
      {productList.map((product) => (
        <ProductItem
          key={product.key}
          keyProduct={product.key}
          title={product.masterData.current.name['en-US']}
          description={product.masterData.current.description?.['en-US']}
          url={product.masterData.current.masterVariant.images[0].url}
          prices={product.masterData.current.masterVariant.prices[0]}
        />
      ))}
    </Box>
  );
};

export default ProductList;
