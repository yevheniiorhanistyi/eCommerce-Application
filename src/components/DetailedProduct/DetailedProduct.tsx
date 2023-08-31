import { useEffect, useRef, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useModal } from '../ModalProvider/ModalProvider';
import DetailedProductNotFound from './DetailedProductNotFound';
import CenteredDivider from '../CenteredDivider/CenteredDivider';
import styles from './DetailedProduct.styles';
import ProductImage from '../ProductImage/ProductImage';
import ProductSlider from '../ProductSlider/ProductSlider';
import getProduct from '../../services/apiIntegration/product';
import { IDetailedProductProps, IProductDisplayData } from '../../types/types';
import parsingData from './services/parsingData';

const DetailedProduct: React.FC<IDetailedProductProps> = ({
  keyProduct,
}: IDetailedProductProps) => {
  const modal = useModal();
  const [productData, setProductData] = useState<
  IProductDisplayData | null | ''
  >('');
  const imageViewRef = useRef<HTMLDivElement>(null);
  const [imageViewWidth, setImageViewWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (imageViewRef.current) {
        setImageViewWidth(imageViewRef.current.offsetWidth);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (keyProduct !== undefined) {
        const data = await getProduct(keyProduct, modal);
        const dataDisplay = parsingData(data);
        setProductData(dataDisplay);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderImageView = () => {
    if (!productData) {
      return null;
    }

    if (productData.images.length === 1) {
      return (
        <ProductImage url={productData.images[0].url} alt={productData.title} />
      );
    }
    return (
      <ProductSlider
        images={productData.images}
        keyProduct={productData.title}
      />
    );
  };

  if (productData === null) {
    return <DetailedProductNotFound />;
  }
  if (keyProduct === undefined) {
    return <DetailedProductNotFound />;
  }
  return (
    <Grid container spacing={2}>
      <Grid item sm={6} xs={12}>
        <Box
          sx={[
            styles.sliderView,
            {
              height: imageViewWidth * 0.75,
            },
          ]}
          ref={imageViewRef}
        >
          {renderImageView()}
        </Box>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Box>
          <Typography variant="h2" sx={styles.title}>
            {productData ? productData.title : ''}
          </Typography>
        </Box>
      </Grid>
      <Grid item sm={12} xs={12}>
        <Box>
          <CenteredDivider caption="Description" />
          <Typography variant="body2">
            {productData ? productData.description : ''}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DetailedProduct;
