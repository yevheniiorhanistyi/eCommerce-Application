import { Typography, Box, Paper, Container, Link } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';
import SignInForm from '../../components/SignInForm/SignInForm';

import styles from './SignIn.styles';
import Header from '../../components/Header/Header';

const SignIn = (): JSX.Element => (
  <Container maxWidth="xl" disableGutters>
    <Header />
    <Box sx={styles.outerBox}>
      <Container maxWidth="sm">
        <Box sx={styles.innerBox}>
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
                to="/registration"
              >
                Sign Up here
              </Link>
            </Typography>
            <SignInForm />
          </Paper>
        </Box>
      </Container>
    </Box>
  </Container>
);

export default SignIn;
