import { Link as RouterLink } from 'react-router-dom';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  CardActionArea,
  Box,
  Link,
  Container,
} from '@mui/material';

import styles from './CartItems.styles';

const CartItems: React.FC = ({ products }) => {
  return (
    <Container disableGutters>
      {products.map((product) => (
        <Container>
          <Card sx={styles.card}>
            <Link
              to={`/product/${product.key}`}
              component={RouterLink}
              underline="none"
              color="inherit"
            >
              <CardActionArea>
                <Box sx={styles.innerBox}>
                  <CardMedia
                    component="img"
                    image={product.url}
                    alt={product.title}
                    sx={styles.cardMedia}
                  />
                </Box>
              </CardActionArea>
            </Link>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                align="center"
                sx={styles.typographyTitle}
              >
                {product.title}
              </Typography>
            </CardContent>
            <CardActions sx={styles.cardActions}>
              <Typography
                variant="h6"
                color="text.primary"
                sx={styles.typographyPrice}
              >
                {product.price} {product.currencyCode}
              </Typography>
            </CardActions>
          </Card>
          <Container sx={styles.itemDescription}></Container>
          <Container sx={styles.itemCount}></Container>
          <Container sx={styles.itemPrice}></Container>
        </Container>
      ))}
    </Container>
  );
};

export default CartItems;
