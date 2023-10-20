import { Navigate, Link as RouterLink } from 'react-router-dom';
import { Typography, Paper, Container, Link } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { motion } from 'framer-motion';

import SignUpForm from '../../components/SingUpForm/SignUpForm';
import { useAuth } from '../../components/AuthProvider/AuthProvider';
import { itemAnimation } from '../../utils/animations';

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
    <Container
      component={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      maxWidth="md"
    >
      <Paper
        custom={1}
        component={motion.div}
        variants={itemAnimation}
        elevation={0}
        sx={{ p: 3, mt: 7, mb: 4 }}
      >
        <Typography paddingTop={2} variant="h3" align="center" gutterBottom>
          Create your account
        </Typography>
        <Typography variant="body2" align="center" sx={{ mb: '1em' }}>
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
