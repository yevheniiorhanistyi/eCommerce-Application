import { useEffect, useRef, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { getProduct } from '../../services/product';
import { useModal } from '../ModalProvider/ModalProvider';
import DetailedProductNotFound from './DetailedProductNotFound';
import CenteredDivider from '../CenteredDivider/CenteredDivider';
import styles from './DetailedProduct.styles';
import { IProductDisplayData, parsingData } from './services/parsingData';

interface DetailedProductProps {
  keyProduct: string | undefined;
}

const DetailedProduct: React.FC<DetailedProductProps> = ({
  keyProduct,
}: DetailedProductProps) => {
  const modal = useModal();
  const [productData, setProductData] = useState<
  IProductDisplayData | null | ''
  >('');
  const imageViewRef = useRef<HTMLDivElement>(null);
  const [imageViewWidth, setImageViewWidth] = useState(0);

  // useEffect(() => {
  //   if (imageViewRef.current) {
  //     setImageViewWidth(imageViewRef.current.offsetWidth);
  //   }
  // }, []);

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
  }, [keyProduct, modal]);

  const imageViewHeight = imageViewWidth * 0.75;
  const stylesImageView = {
    height: imageViewHeight,
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
          {productData
            ? productData.images.map((item) => (
              <Box key={item.url} sx={styles.imageWrap}>
                <img src={item.url} alt={keyProduct} style={styles.image} />
              </Box>
            ))
            : ''}
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
