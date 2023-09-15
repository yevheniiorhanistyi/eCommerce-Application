import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from 'react';
import { ICartContextType } from '../../types/types';

const CartContext = createContext<ICartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [badgeContent, setBadgeContent] = useState<number>(0);

  const updateBadgeContent = (value: number) => {
    setBadgeContent(value);
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
