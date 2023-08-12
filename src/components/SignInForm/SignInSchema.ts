import * as Yup from 'yup';

const SignInSchema = Yup.object({
  email: Yup.string()
    .trim() // Remove leading and trailing whitespace
    .email('Enter a valid email (e.g., user@example.com)')
    .matches(/^.+@.+\..+$/, 'Email address must contain a domain name')
    .required('Email is required'),
  password: Yup.string()
    .trim()
    .min(8, 'Password should be of minimum 8 characters length')
    .test(
      'uppercase',
      'Password must include at least one uppercase letter (A-Z)',
      (value) => value !== undefined && /[A-Z]/.test(value),
    )
    .test(
      'lowercase',
      'Password must include at least one lowercase letter (a-z)',
      (value) => value !== undefined && /[a-z]/.test(value),
    )
    .test(
      'digit',
      'Password must include at least one digit (0-9)',
      (value) => value !== undefined && /[0-9]/.test(value),
    )
    .test(
      'specialCharacters',
      'Password must include at least one special character (!@#$%^&*)',
      (value) => value !== undefined && /[!@#$%^&*]/.test(value),
    )
    .required('Password is required'),
});

export default SignInSchema;
