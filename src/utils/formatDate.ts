// eslint-disable-next-line import/prefer-default-export
export const formatDateToYYYYMMDD = (dateParam: Date): string => {
  const date = new Date(dateParam);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};
