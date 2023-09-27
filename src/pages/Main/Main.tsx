import { Container } from '@mui/material';

import { PromoSlider, BestSellers } from '../../components';

const Main: React.FC = () => (
  <Container maxWidth="lg">
    <PromoSlider />
    <BestSellers />
  </Container>
);
export default Main;
