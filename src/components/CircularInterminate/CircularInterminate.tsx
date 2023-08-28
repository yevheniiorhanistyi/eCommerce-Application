import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import styles from './CircularIndeterminate.styles';

export default function CircularIndeterminate() {
  return (
    <Box sx={styles.box}>
      <CircularProgress />
    </Box>
  );
}
