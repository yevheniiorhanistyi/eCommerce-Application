import { Box, CircularProgress } from '@mui/material';
import styles from './Spinner.styles';

function Spinner() {
  return (
    <Box sx={styles.spinnerOuterBox}>
      <Box sx={styles.spinnerInnerBox}>
        <CircularProgress />
      </Box>
    </Box>
  );
}

export default Spinner;
