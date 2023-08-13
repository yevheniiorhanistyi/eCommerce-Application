import { Typography, Paper, Container, Link } from '@mui/material';

import styles from './SingUp.style';
import SingUpForm from '../../components/SingUpForm/SingUpForm';

const RegistrationPage = () => (
  <Container component="main" maxWidth="md">
    <Paper elevation={0} sx={{ p: 3 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Create your account
      </Typography>
      <Typography variant="body2" align="center" sx={styles.subtitle}>
        {'already registered? '}
        <Link href="/" align="center" underline="hover">
          Sign In
        </Link>
      </Typography>
      <SingUpForm />
    </Paper>
  </Container>
);

export default RegistrationPage;
