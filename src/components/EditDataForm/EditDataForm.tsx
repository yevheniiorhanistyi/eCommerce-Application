import { useEffect, useState } from 'react';
import { Button, TextField, Grid, InputAdornment, IconButton } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import CenteredDivider from '../CenteredDivider/CenteredDivider';
import styles from './EditDataForm.styles';
import nameValidation from '../../validation/name.validation';
import { IEditDataForm } from '../../types/types';
import {
  getCustomerData,
} from '../../services/apiIntegration/customers';
import dateOfBirthlValidation from '../../validation/dateOfBirth.validation';
import editCustomerData from '../../services/editCustomerData/editCustomerData';
import emailValidation from '../../validation/email.validation';
import { useModal } from '../ModalProvider/ModalProvider';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const EditDataForm: React.FC = (
    onEditDataSuccess,
    customer
) => {
  const modal = useModal();
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    firstName: customer.firstName,
    lastName: customer.lastName,
    dateOfBirth: customer.dateOfBirth,
  });

  const [isSubmitting, setSubmitting] = useState(false);
  console.log(customer);

  const { enqueueSnackbar } = useSnackbar();

  const createValidationSchema = (
    email: string,
  ) =>
    Yup.object().shape({
      firstName: nameValidation.required('First name is required'),
      lastName: nameValidation.required('Last name is required'),
      dateOfBirth: dateOfBirthlValidation,
      email: emailValidation(modal),
    });

  const formik = useFormik({
    initialValues: data,
    validationSchema: createValidationSchema(),
    validateOnChange: true,
    onSubmit: async (values) => {
      const customerData = values as IEditDataForm;
      setSubmitting(true);
      const isEdited = await editCustomerData(customerData);
      if (isEdited) {
        enqueueSnackbar('Changes saved succesfully!', {
          variant: 'success',
        });
      } else {
        enqueueSnackbar('Saving failed, please try again later.', {
          variant: 'error',
        });
      }
      setSubmitting(false);
    },
  });

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
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
            onBlur={formik.handleBlur}
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
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
            required
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of birth"
              value={formik.values.dateOfBirth}
              onChange={(value) => {
                formik
                  .setFieldValue('dateOfBirth', value ?? new Date(), false)
                  .then(() => {
                    formik.validateField('dateOfBirth');
                    formik.touched.dateOfBirth = true;
                  });
              }}
              sx={styles.dateOfBirth}
              slotProps={{
                textField: {
                  error:
                    formik.touched.dateOfBirth &&
                    Boolean(formik.errors.dateOfBirth),
                  helperText:
                    formik.touched.dateOfBirth && formik.errors.dateOfBirth,
                },
              }}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            required
          />
        </Grid>
        <Grid item sm={12} xs={12}>
          <CenteredDivider caption="Password" />
        </Grid>
        <Grid item sm={12} xs={12}>
        <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            name="password"
            label="Current password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
        <Grid item sm={12} xs={12}>
        <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            name="password"
            label="New password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
        <Grid item sm={12} xs={12}>
        <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            name="password"
            label="Repeat new password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
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
      </Grid>
      <Button
        type="submit"
        variant="contained"
        disabled={isSubmitting}
        fullWidth
      >
        Save
      </Button>
    </form>
  );
};

export default EditDataForm;
