import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Product } from '@commercetools/platform-sdk';
import { getProduct } from '../../services/product';
import { useModal } from '../ModalProvider/ModalProvider';
import DetailedProductNotFound from './DetailedProductNotFound';

interface DetailedProductProps {
  keyProduct: string | undefined;
}

const DetailedProduct: React.FC<DetailedProductProps> = ({
  keyProduct,
}: DetailedProductProps) => {
  const modal = useModal();
  const [productData, setProductData] = useState<Product | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (keyProduct !== undefined) {
        const data = await getProduct(keyProduct, modal);
        setProductData(data);
      }
    };

    fetchData();
  }, [keyProduct, modal]);
  return productData ? (
    <Box>
      <Typography variant="h5">{keyProduct}</Typography>
    </Box>
  ) : (
    <DetailedProductNotFound />
  );
};

export default DetailedProduct;
