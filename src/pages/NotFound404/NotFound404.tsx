import { Box, Button, Typography, Grid } from '@mui/material';

import { Link } from 'react-router-dom';

import styles from './NotFound.styles';

const NotFound404: React.FC = () => (
  <Box sx={styles.outerBox}>
    <Grid container spacing={2} minHeight={600}>
      <Grid
        xs
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        textAlign="center"
      >
        <Typography variant="h1" sx={styles.title}>
          404
        </Typography>
        <Typography variant="h6" sx={styles.subtitle}>
          The page you’re looking for doesn’t exist.
        </Typography>
        <Link to="/">
          <Button variant="contained" sx={styles.button}>
            Back Home
          </Button>
        </Link>
      </Grid>
    </Grid>
  </Box>
);

export default NotFound404;
