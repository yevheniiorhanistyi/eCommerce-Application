import * as Yup from 'yup';

//  A valid date input ensuring the user is above a certain age (e.g., 13 years old or older)
const birthDatelValidation: Yup.DateSchema<Date, Yup.AnyObject, undefined, ''> = Yup.date()
  .max(
    new Date(new Date().setFullYear(new Date().getFullYear() - 13)),
    'Must be at least 13 years old',
  )
  .required('Birth date is required');

export default birthDatelValidation;
