import { FC, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useAuth } from '../../AuthProvider/AuthProvider';
import addProductToCart from '../../../services/cart/addProductToCart';
import getCartById from '../../../services/cart/getCartById';
import { IProductDisplayData } from '../../../types/types';
import getIdCartActive from '../../../services/cart/getIdCartActive';
import removeProductFromCart from '../../../services/cart/removeProductFromCart';

interface AddToCartButtonProps {
  product: IProductDisplayData;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({
  product,
}: AddToCartButtonProps) => {
  const [isAddedProduct, setIsAddProduct] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
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
    setIsDisabled(true);
    if (isAddedProduct) {
      await removeFromCart();
    } else {
      await addToCard();
    }
    setIsDisabled(false);
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
    setIsAddProduct(false);
  };

  const addToCard = async () => {
    const cart = await getCartById(idCartActive);
    if (cart) {
      const addProductToCartData = {
        cartId: cart.id,
        cartVersion: cart.version,
        productId: product.productId,
        variantId: product.variantId,
      };
      await addProductToCart(addProductToCartData);
    }
    setIsAddProduct(true);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={
        isAddedProduct ? <ShoppingCartCheckoutIcon /> : <AddShoppingCartIcon />
      }
      onClick={handleClick}
      disabled={isDisabled}
    >
      {isAddedProduct ? 'Remove from Сart' : 'Add to Cart'}
    </Button>
  );
};

export default AddToCartButton;
