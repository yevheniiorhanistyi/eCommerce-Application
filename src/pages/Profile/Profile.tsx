import { Navigate } from 'react-router-dom';

import { Container } from '@mui/material';
import CustomerInfo from '../../components/CustomerInfo/CustomerInfo';
import { useAuth } from '../../components/AuthProvider/AuthProvider';

import styles from './Profile.styles';

const Profile: React.FC = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/" />;
  return (
    <Container fixed maxWidth="md" sx={styles.innerBox}>
      <CustomerInfo />
    </Container>
  );
};

export default Profile;
