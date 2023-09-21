import * as Yup from 'yup';
import { postcodeValidator } from './postalCode/postalCode';

const createPostalCodeValidation = (countries: Record<string, string>) => (fieldName: string): Yup.StringSchema<string, Yup.AnyObject, undefined, ''> => Yup.string()
  .test('postcode-validation', 'Invalid postcode', (value) => {
    const country = countries[fieldName];
    if (typeof value === 'string') {
      return postcodeValidator(value, country);
    }
    return false;
  })
  .required('Postcode is required');

export default createPostalCodeValidation;
