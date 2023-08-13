import { Typography, Paper, Container, Link } from '@mui/material';

import styles from './SignUp.style';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Header from '../../components/Header/Header';

const SignUp = () => (
  <Container maxWidth="xl" disableGutters>
    <Header />
    <Container component="main" maxWidth="md">
      <Paper elevation={0} sx={{ p: 3, mt: 7, mb: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Create your account
        </Typography>
        <Typography variant="body2" align="center" sx={styles.subtitle}>
          {'already registered? '}
          <Link href="/" align="center" underline="hover">
            Sign In
          </Link>
        </Typography>
        <SignUpForm />
      </Paper>
    </Container>
  </Container>
);

export default SignUp;
