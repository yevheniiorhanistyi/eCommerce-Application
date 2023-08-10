import {
  Typography,
  Box,
  Paper,
  Container,
  Link,
  Button,
  TextField,
} from '@mui/material';

import styles from './login.styles';

const Login = () => (
  <Box sx={styles.outerBox}>
    <Container maxWidth="sm">
      <Box sx={styles.innerBox}>
        <Paper sx={styles.paper}>
          <Typography variant="h3" align="center" sx={styles.title}>
            Sign In
          </Typography>
          <Typography variant="body2" align="center" sx={styles.subtitle}>
            {'Not a member yet? '}
            <Link href="/" align="center" underline="hover">
              Sign Up here
            </Link>
          </Typography>
          <Box sx={styles.inputBox}>
            <TextField
              variant="outlined"
              label="Email"
              required
              sx={styles.field}
            />
            <TextField
              variant="outlined"
              label="Password"
              required
              sx={styles.field}
            />
          </Box>
          <Button variant="contained" sx={styles.button}>
            Sign In
          </Button>
        </Paper>
      </Box>
    </Container>
  </Box>
);

export default Login;
