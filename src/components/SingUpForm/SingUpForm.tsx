import { useEffect, useRef, useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  InputAdornment,
  IconButton,
} from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CenteredDivider from '../CenteredDivider/CenteredDivider';

import styles from './SingUpForm.styles';
import passwordValidation from '../../validation/password.validation';
import emailValidation from '../../validation/email.validation';
import nameValidation from '../../validation/name.validation';
import notEmtyValidation from '../../validation/notEmty.validation';
import confirmFiled from '../../validation/confirmFiled';

const validationSchema = Yup.object({
  firstName: nameValidation.required('First name is required'),
  lastName: nameValidation.required('Last name is required'),
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: confirmFiled('password', 'Passwords must match'),
  street: notEmtyValidation,
  city: nameValidation.required('City is required'),
});

const SingUpForm = () => {
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isPasswordValid && confirmPasswordRef.current) {
      confirmPasswordRef.current.focus();
    }
  }, [isPasswordValid]);

  const formData = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    street: '',
    city: '',
    postalCode: '',
    country: '',
  };

  const handleSubmit = () => {};
  const handleInputChange = () => {};
  const handleInputBlur = (
    fieldName: keyof typeof formData,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    formik.handleBlur(e);
    if (!formik.errors[fieldName]) {
      formData[fieldName] = e.target.value;
    }
    console.log(`formData.${fieldName}`, formData[fieldName]);
  };
  const handlePasswordBlur = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    formik.handleBlur(e);
    setIsPasswordValid(!formik.errors.password);
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: formData,
    validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2} sx={styles.contanierGrid}>
        <Grid item sm={12} xs={12}>
          <CenteredDivider caption="Personal information" />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            name="firstName"
            label="First Name"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={(e) => handleInputBlur('firstName', e)}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
            required
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            name="lastName"
            label="Last Name"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={(e) => handleInputBlur('lastName', e)}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            required
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of birth"
              onChange={handleInputChange}
              value={formData.birthDate ? formData.birthDate : null}
              sx={styles.birthDate}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item sm={12} xs={12}>
          <CenteredDivider caption="Credentials Information" />
        </Grid>
        <Grid item sm={12} xs={12}>
          <TextField
            fullWidth
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={(e) => handleInputBlur('email', e)}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            required
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            name="password"
            label="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={(e) => handlePasswordBlur(e)}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            name="confirmPassword"
            label="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.confirmPassword
              && Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            required
            disabled={!isPasswordValid}
            inputRef={confirmPasswordRef}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePassword}
                    edge="end"
                    disabled={!isPasswordValid}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item sm={12} xs={12}>
          <CenteredDivider caption="Adress" />
        </Grid>
        <Grid item sm={12} xs={12}>
          <TextField
            fullWidth
            name="street"
            label="Street"
            value={formik.values.street}
            onChange={formik.handleChange}
            onBlur={(e) => handleInputBlur('street', e)}
            error={formik.touched.street && Boolean(formik.errors.street)}
            helperText={formik.touched.street && formik.errors.street}
            required
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            name="city"
            label="City"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={(e) => handleInputBlur('city', e)}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
            required
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            label="Country"
            fullWidth
            name="country"
            value={formData.country}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            label="Postal Code"
            fullWidth
            name="postalCode"
            value={formData.postalCode}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" fullWidth>
        Register
      </Button>
    </form>
  );
};

export default SingUpForm;
