import { Link } from 'react-router-dom';
import { Tooltip, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../../CartProvider/CartProvider';

import styles from './CartButton.styles';

const CartButton: React.FC = () => {
  const { badgeContent } = useCart();

  return (
    <Tooltip title="Cart">
      <Badge overlap="circular" badgeContent={badgeContent} color="error">
        <Link to="/cart" style={{ textDecoration: 'none' }}>
          <IconButton sx={styles.button}>
            <ShoppingCartIcon />
          </IconButton>
        </Link>
      </Badge>
    </Tooltip>
  );
};

export default CartButton;
