import { Container } from '@mui/material';
import CustomerInfo from '../../components/CustomerInfo/CustomerInfo';

import styles from './Profile.styles';

const Page: React.FC = () => (
  <Container maxWidth="md" sx={styles.outerBox}>
    <CustomerInfo />
  </Container>
);

export default Page;
