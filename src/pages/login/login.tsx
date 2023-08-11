import { Typography, Box, Paper, Container, Link } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';
import SignInForm from '../../components/SignInForm/LoginForm';

import styles from './Login.styles';

const Login = (): JSX.Element => (
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
);

export default Login;
