import { Container } from '@mui/material';
import ProductList from '../../components/ProductList/ProductList';

const Catalog: React.FC = () => (
  <Container component="main" maxWidth="lg">
    <ProductList />
  </Container>
);
export default Catalog;
