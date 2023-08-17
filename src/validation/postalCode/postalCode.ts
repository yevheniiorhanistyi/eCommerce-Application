import POSTCODE_REGEXES from './postalCodeRegexes';

export const postcodeValidator = (
  postcode: string,
  country: string,
): boolean => {
  if (!POSTCODE_REGEXES.has(country)) {
    // throw Error if country code is unrecognised
    throw Error(`Invalid country code: ${country}`);
  }

  return POSTCODE_REGEXES.get(country)?.test(postcode) ?? false;
};

export const existsForCountry = (country: string): boolean => POSTCODE_REGEXES.has(country);
