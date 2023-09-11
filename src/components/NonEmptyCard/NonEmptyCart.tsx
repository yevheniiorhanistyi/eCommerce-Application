import { Box, Container } from '@mui/material';
import CartItems from '../CartItems/CartItems';

import styles from './NonEmptyCart.styles';

const NonEmptyCart: React.FC = () => {
  const products = [
    {
      url: 'https://18987ad4d187cc60649f-a9c27d9399f1feb5dec85c4a8a971741.ssl.cf3.rackcdn.com/pa3-PpN7_737.jpg',
      name: 'First',
      title: 'First title',
      key: 'Patagonia Baby Regenerative Organic Certified Cotton Fitz Roy Skies T-Shirt',
      price: '100',
      currencyCode: '$',
    },
    {
      url: 'https://18987ad4d187cc60649f-a9c27d9399f1feb5dec85c4a8a971741.ssl.cf3.rackcdn.com/pa3-PpN7_737.jpg',
      name: 'Second',
      title: 'Second title',
      key: 'Patagonia Baby Regenerative Organic Certified Cotton Fitz Roy Skies T-Shirt',
      price: '100',
      currencyCode: 'P',
    },
  ];

  return (
    <Container sx={styles.wrapper} disableGutters>
      <Container sx={styles.leftSide} disableGutters>
        <CartItems products={products} />
      </Container>
      <Container sx={styles.rightSide}>
        <Container sx={styles.rightSideWrapper}>
          <Container sx={styles.summaryPrice} disableGutters>
            <Box component="span" sx={styles.summaryTitle}>Summary:</Box>
            <Box component="span" sx={styles.summaryValue}>13928 $</Box>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default NonEmptyCart;
