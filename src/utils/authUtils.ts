export const setTokenToSessionStorage = (token: string): void => {
  sessionStorage.setItem('accessToken', token);
};

export const getTokenFromSessionStorage = (): string | null => {
  const token = sessionStorage.getItem('accessToken');
  return token;
};
