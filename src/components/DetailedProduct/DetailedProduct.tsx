import { useEffect, useState } from 'react';
import { Backdrop, Box, Typography } from '@mui/material';
import { Product } from '@commercetools/platform-sdk';
import { getProduct } from '../../services/product';
import { useModal } from '../ModalProvider/ModalProvider';
import DetailedProductNotFound from './DetailedProductNotFound';
import languageCode from '../../utils/languageCode';

interface DetailedProductProps {
  keyProduct: string | undefined;
}

interface IImage {
  url: string;
  dimensions: {
    w: number;
    h: number;
  };
}

interface IProductDisplayData {
  title: string;
  description: string;
  images: IImage[];
}

const DetailedProduct: React.FC<DetailedProductProps> = ({
  keyProduct,
}: DetailedProductProps) => {
  const modal = useModal();
  const [productData, setProductData] = useState<
  IProductDisplayData | null | ''
  >('');

  const parsingData = (data: Product | null): IProductDisplayData | null => {
    if (data) {
      return {
        title: data.masterData.current.name[languageCode],
        description: data.masterData.current.description
          ? data.masterData.current.description[languageCode]
          : '',
        images: data.masterData.staged.masterVariant.images ?? [],
      };
    }
    return null;
  };

  useEffect(() => {
    const fetchData = async () => {
      if (keyProduct !== undefined) {
        const data = await getProduct(keyProduct, modal);
        const dataDisplay = parsingData(data);
        setProductData(dataDisplay);
      }
    };

    fetchData();
  }, [keyProduct, modal]);

  if (productData === null) {
    return <DetailedProductNotFound />;
  }
  if (keyProduct === undefined) {
    return <DetailedProductNotFound />;
  }
  return (
    <Box>
      <Typography variant="h5">
        {productData ? productData.title : ''}
      </Typography>
      <Typography variant="body2">
        {productData ? productData.description : ''}
      </Typography>
      {productData
        ? productData.images.map((item) => (
          <Typography key={item.url} variant="body2">
            {item.url}
          </Typography>
        ))
        : ''}
    </Box>
  );
};

export default DetailedProduct;
