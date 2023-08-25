import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from 'react';
import { IAuthContextType } from '../../types/types';
import { getTokenFromLocalStorage } from '../../utils/authUtils';

const AuthContext = createContext<IAuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const accessToken = getTokenFromLocalStorage();
    if (accessToken) setIsSignedIn(true);
  }, []);

  const contextValue = useMemo(
    () => ({ isSignedIn, setIsSignedIn }),
    [isSignedIn],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
