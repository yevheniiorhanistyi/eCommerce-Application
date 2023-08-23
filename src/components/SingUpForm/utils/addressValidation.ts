import * as Yup from 'yup';

import notEmtyValidation from '../../../validation/notEmty.validation';
import createPostalCodeValidation from '../../../validation/postalCode.validation';
import nameValidation from '../../../validation/name.validation';

const addressValidation = (
  countryField: Record<string, string>,
  nameFiled: string,
  validateFields = true,
) => Yup.object().shape({
  street: validateFields ? notEmtyValidation : Yup.string(),
  city: validateFields
    ? nameValidation.required('City is required')
    : Yup.string(),
  country: validateFields ? notEmtyValidation : Yup.string(),
  postalCode: validateFields
    ? createPostalCodeValidation(countryField)(nameFiled)
    : Yup.string(),
});

export default addressValidation;
