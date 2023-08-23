import * as Yup from 'yup';
import addressValidation from './addressValidation';
import passwordValidation from '../../../validation/password.validation';
import emailValidation from '../../../validation/email.validation';
import nameValidation from '../../../validation/name.validation';
import confirmFiled from '../../../validation/confirmFiled';
import birthDatelValidation from '../../../validation/birthDate.validation';
import { ModalContextType } from '../../ModalProvider/type';

const createValidationSchema = (
  countryField: Record<string, string>,
  modal: ModalContextType,
  isVisibleAddressBilling: boolean,
) => Yup.object().shape({
  firstName: nameValidation.required('First name is required'),
  lastName: nameValidation.required('Last name is required'),
  birthDate: birthDatelValidation,
  email: emailValidation(modal),
  password: passwordValidation,
  confirmPassword: confirmFiled('password', 'Passwords must match'),
  addressShipping: addressValidation(countryField, 'addressShipping'),
  addressBilling: addressValidation(
    countryField,
    'addressBilling',
    isVisibleAddressBilling,
  ),
});

export default createValidationSchema;
