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

import { authenticateClient } from '../../services/authenticate/authenticateClient';
import { getCustomerData } from '../../services/apiIntegration/customers';
import { setUserData } from '../../utils/userDataUtils';
import { useModal } from '../ModalProvider/ModalProvider';
import { ISignInFormProps } from '../../types/types';

import styles from './SignInForm.styles';

const SignInForm: React.FC<ISignInFormProps> = ({
  onSignInSuccess,
}: ISignInFormProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const { openModal, setContent } = useModal();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const showErrorModal = (error: Error) => {
    setContent('error', { title: 'Oops 😕', text: error.message });
    openModal('error', false);
  };

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
          await authenticateClient(values);
          const { firstName, lastName, email } = await getCustomerData();
          setUserData({ firstName, lastName, email });
          onSignInSuccess();
        } catch (error) {
          if (error instanceof Error) showErrorModal(error);
        } finally {
          resetForm();
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
                type="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
              />
              {touched.email && errors.email ? (
                <FormHelperText sx={styles.helperText} error>
                  {errors.email}
                </FormHelperText>
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
                <FormHelperText sx={styles.helperText} error>
                  {errors.password}
                </FormHelperText>
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
