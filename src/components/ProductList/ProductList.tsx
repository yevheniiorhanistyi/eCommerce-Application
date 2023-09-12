import { Box } from '@mui/material';
import CircularIndeterminate from '../CircularInterminate/CircularInterminate';
import { ProductItem } from '../ProductItem/ProductItem';
import { ProductListProps } from '../../types/productInterfaces';

import styles from './ProductList.styles';

export const ProductList: React.FC<ProductListProps> = ({
  isLoading,
  products,
}: ProductListProps) => (isLoading ? (
  <Box sx={styles.circularIndeterminateBox}>
    <CircularIndeterminate />
  </Box>
) : (
  <Box sx={styles.productListBox}>
    {products.map((product) => (
      <ProductItem
        key={product.key}
        keyProduct={product.key}
        title={product.name['en-US']}
        description={product.description?.['en-US']}
        url={product.masterVariant.images[0].url}
        prices={product.masterVariant.prices[0]}
      />
    ))}
  </Box>
));

export default ProductList;
