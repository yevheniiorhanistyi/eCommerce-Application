const formatPrice = (
  value: number,
  fractionDigits = 2,
  currencyCode = 'EUR',
): string => `${(value / 10 ** fractionDigits).toFixed(fractionDigits)} ${currencyCode}`;

export default formatPrice;
