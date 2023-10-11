import { Link as RouterLink, Navigate } from 'react-router-dom';
import { Typography, Paper, Container, Link } from '@mui/material';
import { useSnackbar } from 'notistack';
import { motion } from 'framer-motion';

import SignInForm from '../../components/SignInForm/SignInForm';

import { useAuth } from '../../components/AuthProvider/AuthProvider';
import { itemAnimation } from '../../utils/animations';

import styles from './SignIn.styles';

const SignIn: React.FC = () => {
  const { isAuthenticated, setAuthentication } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

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
      maxWidth="sm"
      sx={styles.outerBox}
    >
      <Paper
        custom={1}
        component={motion.div}
        variants={itemAnimation}
        sx={styles.paper}
      >
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
        <SignInForm onSignInSuccess={handleSignIn} />
      </Paper>
    </Container>
  );
};

export default SignIn;
