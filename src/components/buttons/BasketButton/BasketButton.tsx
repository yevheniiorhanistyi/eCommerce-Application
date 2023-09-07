import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import styles from './BasketButton.styles';

const BasketButton: React.FC = () => (
  <Link to="/" style={{ textDecoration: 'none' }}>
    <IconButton sx={styles.button}>
      <ShoppingCartIcon />
    </IconButton>
  </Link>
);

export default BasketButton;
