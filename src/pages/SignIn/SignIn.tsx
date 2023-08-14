import { Typography, Paper, Container, Link } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';
import SignInForm from '../../components/SignInForm/SignInForm';

import styles from './SignIn.styles';
import Header from '../../components/Header/Header';

const SignIn: React.FC = () => (
  <Container maxWidth="xl" disableGutters>
    <Header />
    <Container maxWidth="sm" sx={styles.outerBox}>
      <Paper sx={styles.paper}>
        <Typography variant="h3" align="center" sx={styles.title}>
          Sign In
        </Typography>
        <Typography variant="body2" align="center" sx={styles.subtitle}>
          {'Not a member yet? '}
          <Link
            align="center"
            underline="hover"
            component={RouterLink}
            to="/signup"
          >
            Sign Up here
          </Link>
        </Typography>
        <SignInForm />
      </Paper>
    </Container>
  </Container>
);

export default SignIn;
