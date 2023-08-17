import * as Yup from 'yup';

// Must contain at least one character and no special characters or numbers
const notEmtyValidation: Yup.StringSchema<
string,
Yup.AnyObject,
undefined,
''
> = Yup.string().trim().required('Must contain at least one character');

export default notEmtyValidation;
