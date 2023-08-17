export const setTokenToLocalStorage = (token: string): void => {
  localStorage.setItem('accessToken', token);
};

export const getTokenFromLocalStorage = (): string | null => {
  const token = localStorage.getItem('accessToken');
  return token;
};

export const removeTokenFromLocalStorage = (): void => {
  localStorage.removeItem('accessToken');
};
