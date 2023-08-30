import { Container } from '@mui/material';
import CustomerInfo from '../../components/CustomerInfo/CustomerInfo';

import styles from './Profile.styles';

const Page: React.FC = () => (
  <Container sx={styles.outerBox}>
    <Container maxWidth="md" sx={styles.innerBox}>
      <CustomerInfo />
    </Container>
  </Container>
);

export default Page;
