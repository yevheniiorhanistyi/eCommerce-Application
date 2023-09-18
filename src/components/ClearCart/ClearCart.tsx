import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import styles from './ClearCart.styles';
import { useModal } from '../ModalProvider/ModalProvider';
import { TReturnClose } from '../ModalProvider/type';

interface IClearCartProps {
  clearSuccess: () => void;
}

const ClearCart: React.FC<IClearCartProps> = ({
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
    console.log('clearCart');
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
