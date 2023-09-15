import React, { createContext, useContext, useState, useMemo } from 'react';
import { ICartContextType, ICartProviderProps } from '../../types/types';

const CartContext = createContext<ICartContextType | undefined>(undefined);

export const CartProvider: React.FC<ICartProviderProps> = ({ children }) => {
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
