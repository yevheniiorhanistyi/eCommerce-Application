import * as Yup from 'yup';

// fileds must match
const confirmFiled = (
  nameFiled: string,
  message: string,
): Yup.StringSchema<string, Yup.AnyObject, undefined, ''> => Yup.string()
  .trim()
  .oneOf([Yup.ref(nameFiled)], message)
  .required(`It is required. ${message}`);

export default confirmFiled;
