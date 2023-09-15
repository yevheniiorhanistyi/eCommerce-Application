import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  ReactNode,
} from 'react';

interface CartContextType {
  badgeContent: number;
  updateBadgeContent: (value: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

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

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
