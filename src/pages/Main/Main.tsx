import {
  Container,
  Link,
  List,
  ListItem,
  Paper,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import styles from './Main.styles';

const Main: React.FC = () => (
  <Container maxWidth="lg">
    <Paper elevation={0} sx={{ p: 3, mt: 7, mb: 4 }}>
      <Typography variant="h3" align="center">
        Main page
      </Typography>
      <List>
        <ListItem>
          <Link
            align="center"
            underline="hover"
            sx={styles.link}
            component={RouterLink}
            variant="h5"
            to="/signin"
          >
            <LoginIcon sx={styles.icon} />
            Sign In
          </Link>
        </ListItem>
        <ListItem>
          <Link
            align="center"
            underline="hover"
            sx={styles.link}
            component={RouterLink}
            variant="h5"
            to="/signup"
          >
            <VpnKeyIcon sx={styles.icon} />
            Sign Up
          </Link>
        </ListItem>
      </List>
    </Paper>
  </Container>
);
export default Main;
