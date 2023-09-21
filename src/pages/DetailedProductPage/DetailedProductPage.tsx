import { Container, Paper } from '@mui/material';
import { useParams } from 'react-router-dom';
import DetailedProduct from '../../components/DetailedProduct/DetailedProduct';

const DetailedProductPage: React.FC = () => {
  const { key } = useParams<{ key: string }>();
  return (
    <Container maxWidth="lg">
      <Paper elevation={0} sx={{ p: 3, mt: 7, mb: 4 }}>
        <DetailedProduct keyProduct={key} />
      </Paper>
    </Container>
  );
};

export default DetailedProductPage;
