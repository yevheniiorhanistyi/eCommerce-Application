import * as Yup from 'yup';
import { ModalContextType } from '../components/ModalProvider/type';
import { checkEmailCustomer } from '../services/customers';

// A properly formatted email address
const emailValidation = (
  modal: ModalContextType,
): Yup.StringSchema<string, Yup.AnyObject, undefined, ''> => Yup.string()
  .trim()
  .email('Enter a valid email (e.g., user@example.com)')
  .matches(/^.+@.+\..+$/, 'Email address must contain a domain name')
  .required('Email is required')
  .test(
    'email-present',
    'This email is already registered',
    async (value) => {
      if (value) {
        const isUnique = await checkEmailCustomer(value, modal);
        return isUnique !== null ? !isUnique : true;
      }
      return true;
    },
  );

export default emailValidation;
