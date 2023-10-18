import { Paper, Box, Skeleton, Typography, Container } from '@mui/material';

import styles from './CartDataLoader.style';

const CartDataLoader: React.FC = () => {
  const cartDataFields = ['item1', 'item2'];

  return (
    <Paper elevation={0} sx={{ p: 3, mt: 7, mb: 4 }}>
      <Typography variant="h3" align="left" sx={styles.title}>
        Cart
      </Typography>
      <Container sx={styles.container}>
        <Box sx={styles.box60}>
          {cartDataFields.map((field) => (
            <Box key={field} sx={styles.innerBox}>
              <Skeleton variant="rectangular" sx={styles.imageSkeleton} />
              <Box sx={styles.contentBox}>
                <Skeleton sx={styles.contentSkeleton} />
                <Skeleton variant="rectangular" sx={styles.infoSkeleton} />
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={styles.box35}>
          <Paper sx={styles.infoPaper}>
            <Skeleton sx={styles.infoSkeleton1} />
            <Skeleton sx={styles.infoSkeleton2} />
          </Paper>
        </Box>
      </Container>
      <Box sx={styles.bottomBox}>
        <Skeleton sx={styles.bottomSkeleton} />
      </Box>
    </Paper>
  );
};

export default CartDataLoader;
