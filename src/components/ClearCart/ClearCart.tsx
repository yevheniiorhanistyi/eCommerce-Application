import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import styles from './ClearCart.styles';

interface IClearCartProps {
  clearSuccess: () => void;
}

const ClearCart: React.FC<IClearCartProps> = ({
  clearSuccess,
}: IClearCartProps) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {};

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
