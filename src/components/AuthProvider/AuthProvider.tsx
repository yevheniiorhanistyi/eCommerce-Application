import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from 'react';
import { getTokenFromLocalStorage } from '../../utils/authUtils';
import { getAnonymousToken } from '../../services/authenticate/getAnonymousToken';
import { IAuthContextType } from '../../types/types';

const AuthContext = createContext<IAuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setAuthentication] = useState(false);

  useEffect(() => {
    const { isAuthenticated: storedIsAuthenticated } = getTokenFromLocalStorage();
    const fetchAccessToken = async () => {
      const accessToken = await getAnonymousToken();
      return accessToken;
    };
    const { token } = getTokenFromLocalStorage() || fetchAccessToken();

    if (token && storedIsAuthenticated) setAuthentication(true);
  }, [isAuthenticated]);

  const contextValue = useMemo(
    () => ({ isAuthenticated, setAuthentication }),
    [isAuthenticated],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
