import { useEffect, useRef, useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useModal } from '../ModalProvider/ModalProvider';
import DetailedProductNotFound from './DetailedProductNotFound';
import CenteredDivider from '../CenteredDivider/CenteredDivider';
import styles from './DetailedProduct.styles';
import ProductImage from '../ProductImage/ProductImage';
import ProductSlider from '../ProductSlider/ProductSlider';
import PriceProduct from '../PriceProduct/PriceProduct';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageViewRef.current]);

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

  if (productData === null) {
    return <DetailedProductNotFound />;
  }
  if (keyProduct === undefined) {
    return <DetailedProductNotFound />;
  }
  if (productData === '') {
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
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddShoppingCartIcon />}
          >
            Buy
          </Button>
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
