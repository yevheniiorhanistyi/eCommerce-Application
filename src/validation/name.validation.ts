import * as Yup from 'yup';

// Must contain at least one character and no special characters or numbers
const nameValidation: Yup.StringSchema<
string | undefined,
Yup.AnyObject,
undefined,
''
> = Yup.string()
  .trim()
  .matches(
    /^[a-zA-Z]+$/,
    'Must contain at least one character and no special characters or numbers',
  );

export default nameValidation;
