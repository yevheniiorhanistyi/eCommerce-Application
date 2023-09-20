import { useEffect, useRef, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useModal } from '../ModalProvider/ModalProvider';
import DetailedProductNotFound from './DetailedProductNotFound';
import CenteredDivider from '../CenteredDivider/CenteredDivider';
import ProductImage from '../ProductImage/ProductImage';
import ProductSlider from '../ProductSlider/ProductSlider';
import PriceProduct from '../PriceProduct/PriceProduct';
import getProduct from '../../services/apiIntegration/product';
import { IDetailedProductProps, IProductDisplayData } from '../../types/types';
import parsingData from './services/parsingData';
import AddToCartButton from '../buttons/AddToCartButton/AddToCartButton';

import styles from './DetailedProduct.styles';

const DetailedProduct: React.FC<IDetailedProductProps> = ({
  keyProduct,
}: IDetailedProductProps) => {
  const [productData, setProductData] = useState<
  IProductDisplayData | null | undefined
  >();
  const [imageViewWidth, setImageViewWidth] = useState(544);
  const imageViewRef = useRef<HTMLDivElement>(null);
  const modal = useModal();

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [productData]);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleResize = () => {
    if (imageViewRef.current) {
      setImageViewWidth(imageViewRef.current.offsetWidth);
    }
  };

  const fetchData = async () => {
    if (keyProduct !== undefined) {
      const data = await getProduct(keyProduct, modal);
      const dataDisplay = parsingData(data);
      setProductData(dataDisplay);
    }
  };

  const renderImageView = (data: IProductDisplayData) => {
    if (data.images.length === 1) {
      return (
        <ProductImage
          url={data.images[0].url}
          alt={data.title}
          images={data.images}
        />
      );
    }
    return <ProductSlider images={data.images} title={data.title} />;
  };

  if (productData === null || keyProduct === undefined) {
    return <DetailedProductNotFound />;
  }
  if (productData === undefined) {
    return null;
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
          {renderImageView(productData)}
        </Box>
      </Grid>
      <Grid item sm={6} xs={12}>
        <Box sx={styles.tittleBlock}>
          <Typography variant="h2">{productData.title}</Typography>
          <PriceProduct productData={productData} />
          <AddToCartButton product={productData} />
        </Box>
      </Grid>
      <Grid item sm={12} xs={12}>
        <Box>
          <CenteredDivider caption="Description" />
          <Typography variant="body2">{productData.description}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DetailedProduct;
