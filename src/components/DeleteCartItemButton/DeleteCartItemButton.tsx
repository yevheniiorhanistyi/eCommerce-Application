import { FC, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { LineItem } from '@commercetools/platform-sdk';
import { useAuth } from '../AuthProvider/AuthProvider';
import getIdCartActive from '../../services/cart/getIdCartActive';
import getCartById from '../../services/cart/getCartById';
import removeProductFromCart from '../../services/cart/removeProductFromCart';

interface DeleteItemButtonProps {
  product: LineItem;
  deleteSuccess: () => void;
}

const DeleteCartItemButton: FC<DeleteItemButtonProps> = ({
  product,
  deleteSuccess,
}: DeleteItemButtonProps) => {
  const { isAuthenticated } = useAuth();
  const [idCartActive, setIdCartActive] = useState('');

  useEffect(() => {
    fetchCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchCart = async () => {
    const idCart = await getIdCartActive(isAuthenticated);
    setIdCartActive(idCart);
  };

  const handleClick = async () => {
    await removeFromCart();
    deleteSuccess();
  };

  const removeFromCart = async () => {
    const cart = await getCartById(idCartActive);
    if (cart) {
      const removeProductFromCartData = {
        cartId: cart.id,
        cartVersion: cart.version,
        productId: product.productId,
      };
      await removeProductFromCart(removeProductFromCartData);
    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<DeleteOutlineIcon />}
      onClick={handleClick}
    >
      Delete
    </Button>
  );
};

export default DeleteCartItemButton;
