import { Box, Button, Typography } from '@mui/material';

import styles from './NotFound.styles';

const NotFound404 = (): JSX.Element => (
  <Box sx={styles.outerBox}>
    <Typography variant="h1" sx={styles.title}>
      404
    </Typography>
    <Typography variant="h6" sx={styles.subtitle}>
      The page you’re looking for doesn’t exist.
    </Typography>
    <Button variant="contained" sx={styles.button}>
      Back Home
    </Button>
  </Box>
);

export default NotFound404;