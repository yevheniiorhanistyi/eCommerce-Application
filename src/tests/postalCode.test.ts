import {
  postcodeValidator,
  existsForCountry,
} from '../validation/postalCode/postalCode'; // Подставьте путь к вашему модулю

// Mocking the POSTCODE_REGEXES object for testing
jest.mock(
  '../validation/postalCode/postalCodeRegexes.ts',
  () => new Map([
    ['US', /^([0-9]{5})(?:-([0-9]{4}))?$/], // Example regular expression for the US
    [
      'CA',
      /^([ABCEGHJKLMNPRSTVXY][0-9][ABCEGHJKLMNPRSTVWXYZ])\s*([0-9][ABCEGHJKLMNPRSTVWXYZ][0-9])$/i,
    ], // Example regular expression for Canada
  ]),
);

describe('postcodeValidator', () => {
  test('validates postcode for a recognized country', () => {
    const validUSPostcode = '12345';
    const country = 'US';

    const isValid = postcodeValidator(validUSPostcode, country);

    expect(isValid).toBe(true);
  });

  test('throws error for an unrecognized country', () => {
    const invalidCountry = 'UK';
    const postcode = 'SW1A 1AA';

    expect(() => postcodeValidator(postcode, invalidCountry)).toThrow(
      'Invalid country code: UK',
    );
  });

  test('returns false for an invalid postcode', () => {
    const invalidCAPostcode = '123456';
    const country = 'CA';

    const isValid = postcodeValidator(invalidCAPostcode, country);

    expect(isValid).toBe(false);
  });
});

describe('existsForCountry', () => {
  test('returns true for an existing country', () => {
    const existingCountry = 'US';

    const exists = existsForCountry(existingCountry);

    expect(exists).toBe(true);
  });

  test('returns false for a non-existing country', () => {
    const nonExistingCountry = 'UK';

    const exists = existsForCountry(nonExistingCountry);

    expect(exists).toBe(false);
  });
});
