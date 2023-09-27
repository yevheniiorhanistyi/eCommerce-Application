import { useEffect, useState } from 'react';
import { LineItem } from '@commercetools/platform-sdk';
import { CircularProgress, Box } from '@mui/material';
import { enqueueSnackbar } from 'notistack';

import { useAuth } from '../AuthProvider/AuthProvider';
import { useCart } from '../CartProvider/CartProvider';
import { ProductItem } from '../ProductItem/ProductItem';
import { ProductListProps } from '../../types/productInterfaces';

import getCartById from '../../services/cart/getCartById';
import getIdCartActive from '../../services/cart/getIdCartActive';
import addProductToCart from '../../services/cart/addProductToCart';
import removeProductFromCart from '../../services/cart/removeProductFromCart';

import styles from './ProductList.styles';
import Spinner from '../Spinner/Spinner';

export const ProductList: React.FC<ProductListProps> = ({
  isLoading,
  products,
}: ProductListProps) => {
  const [isAddedProduct, setIsAddProduct] = useState(false);
  const [idCartActive, setIdCartActive] = useState('');
  const [itemsInCart, setItemsInCart] = useState<LineItem[]>([]);
  const { isAuthenticated } = useAuth();
  const { badgeContent, updateBadgeContent } = useCart();

  useEffect(() => {
    fetchCart();
  }, [isAddedProduct]);

  const getItemsFromCart = async (id: string) => {
    const cart = await getCartById(id);
    if (cart) {
      setItemsInCart(cart.lineItems);
      updateBadgeContent(cart.totalLineItemQuantity || 0);
    }
  };

  const fetchCart = async () => {
    const idCart = await getIdCartActive(isAuthenticated);
    setIdCartActive(idCart);
    if (idCart) getItemsFromCart(idCart);
  };

  const addToCard = async (productId: string, variantId: number) => {
    const cart = await getCartById(idCartActive);
    if (cart) {
      const addProductToCartData = {
        cartId: cart.id,
        cartVersion: cart.version,
        productId,
        variantId,
      };
      const isAddeProduct = await addProductToCart(addProductToCartData);
      if (isAddeProduct) {
        enqueueSnackbar('Product added to cart!', {
          variant: 'success',
        });
        setIsAddProduct(true);
        updateBadgeContent(badgeContent + 1);
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

  const removeFromCart = async (productId: string) => {
    const cart = await getCartById(idCartActive);
    if (cart) {
      const removeProductFromCartData = {
        cartId: cart.id,
        cartVersion: cart.version,
        productId,
      };
      const isRemoveProduct = await removeProductFromCart(
        removeProductFromCartData,
      );
      if (isRemoveProduct) {
        enqueueSnackbar('Product removed from cart!', {
          variant: 'success',
        });
        setIsAddProduct(false);
        updateBadgeContent(badgeContent - 1);
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

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Box sx={styles.productListBox}>
      {products.map((product) => (
        <ProductItem
          key={product.key}
          product={product}
          itemsInCart={itemsInCart}
          addToCard={addToCard}
          removeFromCart={removeFromCart}
        />
      ))}
    </Box>
  );
};

export default ProductList;
