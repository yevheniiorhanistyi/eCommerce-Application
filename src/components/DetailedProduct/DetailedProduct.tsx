import { Box, Typography } from '@mui/material';

interface DetailedProductProps {
  keyProduct: string | undefined;
}

const DetailedProduct: React.FC<DetailedProductProps> = ({
  keyProduct,
}: DetailedProductProps) => {
  const productData = keyProduct;
  return (
    <Box>
      <Typography variant="h5">{productData}</Typography>
    </Box>
  );
};

export default DetailedProduct;
