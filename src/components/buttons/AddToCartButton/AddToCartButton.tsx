import { FC, useState } from 'react';
import { Button } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface AddToCartButtonProps {
  idProduct: string;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({
  idProduct,
}: AddToCartButtonProps) => {
  const [isAddedProduct, setIsAddProduct] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const hendleClick = () => {
    setIsDisabled(true);
    if (isAddedProduct) {
      removeWithCart();
    } else {
      addToCard();
    }
    setIsDisabled(false);
  };

  const removeWithCart = () => {
    setIsAddProduct(false);
  };

  const addToCard = () => {
    setIsAddProduct(true);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={
        isAddedProduct ? <ShoppingCartCheckoutIcon /> : <AddShoppingCartIcon />
      }
      onClick={hendleClick}
      disabled={isDisabled}
    >
      {isAddedProduct ? 'Remove from Сart' : 'Add to Cart'}
    </Button>
  );
};

export default AddToCartButton;
