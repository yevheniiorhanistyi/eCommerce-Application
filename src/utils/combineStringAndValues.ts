const combineStringAndValues = (
  inputString: string,
  values: string[],
): string => {
  const formattedValues = values.map((val) => `"${val}"`);
  const formattedString = formattedValues.join(',');
  const resultString = `${inputString}:${formattedString}`;
  return resultString;
};

export default combineStringAndValues;
