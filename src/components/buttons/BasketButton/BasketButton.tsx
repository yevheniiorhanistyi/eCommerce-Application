import { Link } from 'react-router-dom';
import { Tooltip, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import styles from './BasketButton.styles';

const BasketButton: React.FC = () => (
  <Tooltip title="Basket">
    <Badge overlap="circular" badgeContent={3} color="error">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <IconButton sx={styles.button}>
          <ShoppingCartIcon />
        </IconButton>
      </Link>
    </Badge>
  </Tooltip>
);

export default BasketButton;
