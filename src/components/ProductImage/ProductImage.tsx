import { Box } from '@mui/material';
import { IProductImageProps } from '../../types/types';
import styles from './ProductImage.styles';

const ProductImage: React.FC<IProductImageProps> = ({
  url,
  alt,
}: IProductImageProps) => (
  <Box key={url} sx={styles.imageWrap}>
    <img src={url} alt={alt} style={styles.image} />
  </Box>
);

export default ProductImage;
