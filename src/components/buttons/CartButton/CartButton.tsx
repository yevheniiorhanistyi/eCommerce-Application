import { Link } from 'react-router-dom';
import { Tooltip, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../../CartProvider/CartProvider';

const CartButton: React.FC = () => {
  const { badgeContent } = useCart();

  return (
    <Tooltip title="Cart">
      <Badge overlap="circular" badgeContent={badgeContent} color="info">
        <Link to="/cart" style={{ textDecoration: 'none' }}>
          <IconButton sx={{ color: 'common.white' }}>
            <ShoppingCartIcon />
          </IconButton>
        </Link>
      </Badge>
    </Tooltip>
  );
};

export default CartButton;
