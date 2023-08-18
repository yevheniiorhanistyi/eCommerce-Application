import * as Yup from 'yup';
import { postcodeValidator } from './postalCode/postalCode';

const postalCodeValidation = (
  country: string,
): Yup.StringSchema<string, Yup.AnyObject, undefined, ''> => Yup.string()
  .test('postcode-validation', 'Invalid postcode', (value) => {
    if (typeof value === 'string') {
      return postcodeValidator(value, country);
    }
    return false;
  })
  .required('Postcode is required');

export default postalCodeValidation;
