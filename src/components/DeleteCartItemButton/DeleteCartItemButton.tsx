import { FC, useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { LineItem } from '@commercetools/platform-sdk';
import { useAuth } from '../AuthProvider/AuthProvider';
import getIdCartActive from '../../services/cart/getIdCartActive';
import getCartById from '../../services/cart/getCartById';
import removeProductFromCart from '../../services/cart/removeProductFromCart';

import styles from './DeleteCartItemButton.styles';

interface DeleteItemButtonProps {
  product: LineItem;
  deleteSuccess: () => void;
}

const DeleteCartItemButton: FC<DeleteItemButtonProps> = ({
  product,
  deleteSuccess,
}: DeleteItemButtonProps) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [idCartActive, setIdCartActive] = useState('');
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const idCart = await getIdCartActive(isAuthenticated);
    setIdCartActive(idCart);
  };

  const handleClick = async () => {
    setIsDisabled(true);
    const isRemoveItem = await removeFromCart();
    if (isRemoveItem) {
      deleteSuccess();
    }
    setIsDisabled(false);
  };

  const removeFromCart = async (): Promise<boolean> => {
    const cart = await getCartById(idCartActive);
    if (cart) {
      const removeProductFromCartData = {
        cartId: cart.id,
        cartVersion: cart.version,
        productId: product.productId,
      };
      const isRemoveItem = Boolean(
        await removeProductFromCart(removeProductFromCartData),
      );
      if (isRemoveItem) return true;
    }
    return false;
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<DeleteOutlineIcon />}
      onClick={handleClick}
      sx={styles.button}
      disabled={isDisabled}
    >
      <Typography component="span" sx={styles.buttonText}>
        Delete
      </Typography>
    </Button>
  );
};

export default DeleteCartItemButton;
