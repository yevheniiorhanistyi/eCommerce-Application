import { Box } from '@mui/material';
import styles from './ProductImage.styles';

interface ProductImageProps {
  url: string;
  alt: string;
}

const ProductImage: React.FC<ProductImageProps> = ({
  url,
  alt,
}: ProductImageProps) => (
  <Box key={url} sx={styles.imageWrap}>
    <img src={url} alt={alt} style={styles.image} />
  </Box>
);

export default ProductImage;
