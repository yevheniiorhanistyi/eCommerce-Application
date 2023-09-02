import { Container } from '@mui/material';
import CustomerInfo from '../../components/CustomerInfo/CustomerInfo';

import styles from './Profile.styles';

const Page: React.FC = () => (
  <Container fixed maxWidth="md" sx={styles.innerBox}>
    <CustomerInfo />
  </Container>
);

export default Page;
