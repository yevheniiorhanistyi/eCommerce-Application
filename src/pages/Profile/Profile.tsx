import { Navigate } from 'react-router-dom';

import { Container } from '@mui/material';
import CustomerInfo from '../../components/CustomerInfo/CustomerInfo';

import styles from './Profile.styles';
import { useAuth } from '../../components/AuthProvider/AuthProvider';

const Profile: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <Container fixed maxWidth="md" sx={styles.innerBox}>
      <CustomerInfo />
    </Container>
  ) : (
    <Navigate to="/" />
  );
};

export default Profile;
