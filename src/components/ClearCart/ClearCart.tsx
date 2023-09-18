import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { Cart } from '@commercetools/platform-sdk';
import { enqueueSnackbar } from 'notistack';
import { useModal } from '../ModalProvider/ModalProvider';
import { TReturnClose } from '../ModalProvider/type';
import styles from './ClearCart.styles';
import updateCart from '../../services/cart/updateCart';

interface IClearCartProps {
  cartData: Cart;
  clearSuccess: () => void;
}

const ClearCart: React.FC<IClearCartProps> = ({
  cartData,
  clearSuccess,
}: IClearCartProps) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const modal = useModal();

  const handleClick = () => {
    setIsDisabled(true);
    modal.openModal('confirm', false);
    modal.setContent(
      'confirm',
      {
        title: 'Confirmation request',
        text: 'Are you sure you want to clear your cart?',
      },
      (isSuccess: TReturnClose) => {
        if (isSuccess) {
          clearCart();
        }
      },
    );
    setIsDisabled(false);
  };

  const clearCart = async () => {
    const actions = cartData.lineItems.map((item) => ({
      action: 'removeLineItem',
      lineItemId: item.id,
    }));

    const result = await updateCart({
      cartId: cartData.id,
      cartVersion: cartData.version,
      actions,
    });

    if (result && result?.lineItems.length === 0) {
      clearSuccess();
    } else {
      enqueueSnackbar('Failed to empty cart', {
        variant: 'error',
      });
    }
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<RemoveShoppingCartIcon />}
      onClick={handleClick}
      sx={styles.button}
      disabled={isDisabled}
    >
      <Typography component="span" sx={styles.buttonText}>
        Clear Cart
      </Typography>
    </Button>
  );
};

export default ClearCart;
