import { Box } from '@mui/material';
import CircularIndeterminate from '../CircularInterminate/CircularInterminate';
import { ProductItem } from '../ProductItem/ProductItem';
import { IProduct } from '../../types/productInterfaces';

import styles from './ProductList.styles';

type ProductListProps = {
  isLoading: boolean;
  products: IProduct[];
};

const ProductList: React.FC<ProductListProps> = ({
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
        title={product.masterData.current.name['en-US']}
        description={product.masterData.current.description?.['en-US']}
        url={product.masterData.current.masterVariant.images[0].url}
        prices={product.masterData.current.masterVariant.prices[0]}
      />
    ))}
  </Box>
));

export default ProductList;
