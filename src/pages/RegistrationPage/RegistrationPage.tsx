import { Typography, Paper, Container, Link } from '@mui/material';

import styles from './RegistrationPage.style';
import Registration from '../../components/Registration/Registration';

const RegistrationPage = () => (
  <Container component="main" maxWidth="lg">
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
      <Registration />
    </Paper>
  </Container>
);

export default RegistrationPage;
