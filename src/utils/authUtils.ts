export const setTokenToLocalStorage = (
  token: string,
  isAuthenticated: boolean,
): void => {
  localStorage.setItem('accessToken', token);
  localStorage.setItem('isAuthenticated', isAuthenticated.toString());
};

export const getTokenFromLocalStorage = (): {
  token: string | null;
  isAuthenticated: boolean;
} => {
  const token = localStorage.getItem('accessToken');
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  return { token, isAuthenticated };
};

export const removeTokenFromLocalStorage = (): void => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('isAuthenticated');
};
