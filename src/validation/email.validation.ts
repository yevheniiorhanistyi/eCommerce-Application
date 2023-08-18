import * as Yup from 'yup';

// A properly formatted email address
const emailValidation = (
  email: string,
): Yup.StringSchema<string, Yup.AnyObject, undefined, ''> => Yup.string()
  .trim()
  .email('Enter a valid email (e.g., user@example.com)')
  .matches(/^.+@.+\..+$/, 'Email address must contain a domain name')
  .test('email-present', 'This email is already registered', (value) => {
    if (typeof value === 'string') {
      return !(value === email);
    }
    return true;
  })
  .required('Email is required');

export default emailValidation;
