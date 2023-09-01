import { Box, Typography } from '@mui/material';
import { IProductDisplayData } from '../DetailedProduct/services/parsingData';
import styles from './PriceProduct.styles';

interface PriceProductProps {
  productData: IProductDisplayData;
}

const PriceProduct: React.FC<PriceProductProps> = ({
  productData,
}: PriceProductProps) => {
  const displayPrice = (data: IProductDisplayData) => {
    if (data.discountPrice) {
      return (
        <Box sx={styles.discountPriceWrap}>
          <Typography variant="caption" sx={styles.discountPrice}>
            {data.discountPrice}
          </Typography>
          <Typography variant="caption" sx={styles.oldPrice}>
            {data.price}
          </Typography>
        </Box>
      );
    }
    return (
      <Typography variant="caption" sx={styles.price}>
        {data.price}
      </Typography>
    );
  };
  return <Box sx={styles.priceWrap}>{displayPrice(productData)}</Box>;
};

export default PriceProduct;
