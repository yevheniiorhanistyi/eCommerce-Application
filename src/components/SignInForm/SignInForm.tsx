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
import SignInSchema from './SignInSchema';

import { authenticateCustomer } from '../../services/authenticateCustomer';

import styles from './SignInForm.styles';

interface SignInFormProps {
  onSignInSuccess: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({
  onSignInSuccess,
}: SignInFormProps) => {
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
      onSubmit={async (values, { resetForm }) => {
        try {
          await authenticateCustomer(values);
          onSignInSuccess();
          resetForm();
        } catch (error) {
          throw new Error('Error');
        }
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
          <Button type="submit" variant="contained" fullWidth>
            Sign In
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
