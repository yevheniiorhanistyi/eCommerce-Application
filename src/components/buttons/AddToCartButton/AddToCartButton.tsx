import { FC, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { enqueueSnackbar } from 'notistack';
import { useAuth } from '../../AuthProvider/AuthProvider';
import addProductToCart from '../../../services/cart/addProductToCart';
import getCartById from '../../../services/cart/getCartById';
import { IProductDisplayData } from '../../../types/types';
import getIdCartActive from '../../../services/cart/getIdCartActive';
import removeProductFromCart from '../../../services/cart/removeProductFromCart';
import checkProductToCart from '../../../services/cart/checkProductToCart';

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
    const isProductToCart = await checkProductToCart(idCart, product.productId);
    setIsAddProduct(isProductToCart);
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
      const isRemoveProduct = await removeProductFromCart(
        removeProductFromCartData,
      );
      if (isRemoveProduct) {
        enqueueSnackbar('Product removed from cart!', {
          variant: 'success',
        });
        setIsAddProduct(false);
      } else {
        enqueueSnackbar('Product can`t be removed from the cart!', {
          variant: 'error',
        });
      }
    } else {
      enqueueSnackbar('Product can`t be removed from the cart!', {
        variant: 'error',
      });
    }
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
      const isAddeProduct = await addProductToCart(addProductToCartData);
      if (isAddeProduct) {
        enqueueSnackbar('Product added to cart!', {
          variant: 'success',
        });
        setIsAddProduct(true);
      } else {
        enqueueSnackbar('Product can`t be added to the cart!', {
          variant: 'error',
        });
      }
    } else {
      enqueueSnackbar('Product can`t be added to the cart!', {
        variant: 'error',
      });
    }
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
      {isAddedProduct ? 'Remove from Cart' : 'Add to Cart'}
    </Button>
  );
};

export default AddToCartButton;
