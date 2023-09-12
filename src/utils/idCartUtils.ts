export const setIdCart = (idCart: string): void => {
  localStorage.setItem('idCart', JSON.stringify(idCart));
};

export const getIdCart = (): string => {
  const idCartJSON = localStorage.getItem('idCart');
  if (idCartJSON) {
    return JSON.parse(idCartJSON);
  }
  return '';
};

export const removeIdCart = (): void => {
  localStorage.removeItem('idCart');
};
