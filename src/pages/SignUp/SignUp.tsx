import { Typography, Paper, Container, Link } from '@mui/material';

import { Navigate, Link as RouterLink } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';
import SignUpForm from '../../components/SingUpForm/SignUpForm';
import { useAuth } from '../../components/AuthProvider/AuthProvider';

import styles from './SignUp.style';

const SignUp: React.FC = () => {
  const { isAuthenticated, setAuthentication } = useAuth();

  const handleSignIn = () => {
    setAuthentication(true);
    enqueueSnackbar('You have been successfully signed in!', {
      variant: 'success',
    });
  };

  if (isAuthenticated) return <Navigate to="/" />;
  return (
    <Container maxWidth="md">
      <Paper elevation={0} sx={{ p: 3, mt: 7, mb: 4 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Create your account
        </Typography>
        <Typography variant="body2" align="center" sx={styles.subtitle}>
          {'Already registered? '}
          <Link
            align="center"
            underline="hover"
            component={RouterLink}
            to="/signin"
          >
            Sign In
          </Link>
        </Typography>
        <SignUpForm onSignInSuccess={handleSignIn} />
      </Paper>
    </Container>
  );
};

export default SignUp;
