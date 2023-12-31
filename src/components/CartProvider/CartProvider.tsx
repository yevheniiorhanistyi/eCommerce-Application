import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from 'react';
import { ICartContextType, ICartProviderProps } from '../../types/types';
import { useAuth } from '../AuthProvider/AuthProvider';
import getIdCartActive from '../../services/cart/getIdCartActive';
import getCartById from '../../services/cart/getCartById';

const CartContext = createContext<ICartContextType | undefined>(undefined);

export const CartProvider: React.FC<ICartProviderProps> = ({ children }) => {
  const [badgeContent, setBadgeContent] = useState<number>(0);
  const { isAuthenticated } = useAuth();

  const updateBadgeContent = (value: number) => {
    setBadgeContent(value);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    const idCart = await getIdCartActive(isAuthenticated);
    const cart = await getCartById(idCart);
    if (cart) {
      updateBadgeContent(cart.totalLineItemQuantity || 0);
    }
  };

  const contextValue = useMemo(
    () => ({ badgeContent, updateBadgeContent }),
    [badgeContent],
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCart = (): ICartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
