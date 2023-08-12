import { useState } from 'react';

import {
  Box,
  Button,
  OutlinedInput,
  InputLabel,
  FormControl,
  InputAdornment,
  IconButton,
  FormHelperText,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import styles from './LoginForm.styles';

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

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignInSchema}
      onSubmit={(values, { resetForm }) => {
        // alert(JSON.stringify(values, null, 2));
        resetForm();
      }}
    >
      {({ errors, touched, values, handleChange, handleBlur }) => (
        <Form>
          <Box sx={styles.inputBox}>
            <FormControl
              sx={styles.field}
              fullWidth
              variant="outlined"
              required
            >
              <InputLabel
                htmlFor="outlined-email"
                error={touched.email && Boolean(errors.email)}
              >
                Email
              </InputLabel>
              <OutlinedInput
                id="outlined-email"
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
              />
              {touched.email && errors.email ? (
                <FormHelperText error>{errors.email}</FormHelperText>
              ) : null}
            </FormControl>
            <FormControl fullWidth variant="outlined" required>
              <InputLabel
                htmlFor="outlined-adornment-password"
                error={touched.password && Boolean(errors.password)}
              >
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                sx={styles.outlinedInput}
                endAdornment={(
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )}
                label="Password"
              />
              {touched.password && errors.password ? (
                <FormHelperText error>{errors.password}</FormHelperText>
              ) : null}
            </FormControl>
          </Box>
          <Button type="submit" variant="contained" sx={styles.button}>
            Sign In
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
