import createPostalCodeValidation from '../validation/postalCode.validation';

jest.mock('../validation/postalCode/postalCode');

describe('createPostalCodeValidation', () => {
  it('throws an error for an unknown country', () => {
    const countries = {
      fieldA: 'US',
    };
    const fieldName = 'fieldA';

    const validationSchema = createPostalCodeValidation(countries)(fieldName);

    expect(() => validationSchema.validateSync('12345')).toThrow(
      'Invalid postcode',
    );
    expect(() => validationSchema.validateSync(12345)).toThrow(
      'Invalid postcode',
    );
    expect(() => validationSchema.validateSync(null)).toThrow(
      'Postcode is required',
    );
    expect(() => validationSchema.validateSync(undefined)).toThrow(
      'Postcode is required',
    );
  });
});
