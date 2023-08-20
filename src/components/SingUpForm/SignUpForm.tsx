import { useEffect, useRef, useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  InputAdornment,
  IconButton,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent,
  FormHelperText,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import CenteredDivider from '../CenteredDivider/CenteredDivider';
import styles from './SignUpForm.styles';
import passwordValidation from '../../validation/password.validation';
import emailValidation from '../../validation/email.validation';
import nameValidation from '../../validation/name.validation';
import notEmtyValidation from '../../validation/notEmty.validation';
import confirmFiled from '../../validation/confirmFiled';
import getCountries from '../../services/getCountries';
import postalCodeValidation from '../../validation/postalCode.validation';
import { useModal } from '../ModalProvider/ModalProvider';
import {
  IAddress,
  ICountrie,
  ICustomer,
  ICustomerForm,
} from '../../types/types';

const SignUpForm: React.FC = () => {
  const modal = useModal();
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isContrySelected, setIsContrySelected] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countries, setCountries] = useState<ICountrie[]>([]);
  const [isSubmitting, setSubmitting] = useState(false);

  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);

  const labelSelectCountry = 'Contry';

  useEffect(() => {
    if (isPasswordValid && confirmPasswordRef.current) {
      confirmPasswordRef.current.focus();
    }
  }, [isPasswordValid]);
  useEffect(() => {
    const fetchData = async () => {
      const countriesData = await getCountries(modal);
      setCountries(countriesData);
    };

    fetchData();
  }, [modal]);

  const addressValidation = (country: string) => Yup.object().shape({
    street: notEmtyValidation,
    city: nameValidation.required('City is required'),
    country: notEmtyValidation,
    postalCode: postalCodeValidation(country),
  });

  const createValidationSchema = (country: string, email: string) => Yup.object().shape({
    firstName: nameValidation.required('First name is required'),
    lastName: nameValidation.required('Last name is required'),
    email: emailValidation(modal),
    password: passwordValidation,
    confirmPassword: confirmFiled('password', 'Passwords must match'),
    address: addressValidation(country),
  });

  const defaultAddressValues: IAddress = {
    street: '',
    city: '',
    postalCode: '',
    country: '',
    isSetDefaultShippingAddress: false,
    isSetDefaultBillingAddress: false,
  };

  const formData: ICustomerForm = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    birthDate: null,
    address: { ...defaultAddressValues },
  };

  const formik = useFormik({
    initialValues: formData,
    validationSchema: createValidationSchema(selectedCountry, ''),
    validateOnChange: false,
    onSubmit: (values) => {
      const customerData = values as ICustomer;
      console.log('values', customerData);
      setSubmitting(true);

      setSubmitting(false);
    },
  });

  const handlePasswordBlur = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    formik.handleBlur(e);
    setIsPasswordValid(!formik.errors.password);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSelectChange = (
    nameFiled: string,
    e: SelectChangeEvent<string>,
  ) => {
    const { value } = e.target;
    formik.setFieldValue(nameFiled, value).then((error) => {
      formik.validateField(nameFiled).then(() => {
        if (error && nameFiled in error) {
          setIsContrySelected(false);
        } else {
          setIsContrySelected(true);
          setSelectedCountry(value);
        }
      });
    });
    formik.setFieldTouched(nameFiled, true, false);
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
              value={formik.values.birthDate}
              onChange={(value) => {
                formik
                  .setFieldValue('birthDate', value ?? new Date(), false)
                  .then(() => {
                    formik.validateField('birthDate');
                    formik.touched.birthDate = true;
                  });
              }}
              sx={styles.birthDate}
              slotProps={{
                textField: {
                  error:
                    formik.touched.birthDate
                    && Boolean(formik.errors.birthDate),
                  helperText:
                    formik.touched.birthDate && formik.errors.birthDate,
                },
              }}
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
            onBlur={formik.handleBlur}
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
            name="address.street"
            label="Street"
            value={formik.values.address.street}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.address
              && formik.touched.address?.street
              && Boolean(formik.errors.address.street)
            }
            helperText={
              formik.errors.address
              && formik.touched.address?.street
              && formik.errors.address.street
            }
            required
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            name="address.city"
            label="City"
            value={formik.values.address.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.address
              && formik.touched.address?.city
              && Boolean(formik.errors.address.city)
            }
            helperText={
              formik.errors.address
              && formik.touched.address?.city
              && formik.errors.address.city
            }
            required
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <FormControl
            fullWidth
            error={Boolean(
              formik.errors.address
                && formik.touched.address?.country
                && formik.errors.address.country,
            )}
          >
            <InputLabel id="labelSelectContryId">
              {labelSelectCountry}
            </InputLabel>
            <Select
              labelId="labelSelectContryId"
              id="selectContry"
              label={labelSelectCountry}
              fullWidth
              name="address.country"
              value={formik.values.address.country}
              onChange={(e) => handleSelectChange('address.country', e)}
              required
            >
              {countries.map((item) => (
                <MenuItem key={item.codeCountrie} value={item.codeCountrie}>
                  {item.nameCountrie}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              {formik.errors.address
                && formik.touched.address?.country
                && formik.errors.address.country}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            label="Postal Code"
            fullWidth
            name="address.postalCode"
            value={formik.values.address.postalCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.address
              && formik.touched.address?.postalCode
              && Boolean(formik.errors.address.postalCode)
            }
            helperText={
              formik.errors.address
              && formik.touched.address?.postalCode
              && formik.errors.address.postalCode
            }
            required
            disabled={!isContrySelected}
          />
        </Grid>
        <Grid item sm={12} xs={12}>
          <FormGroup>
            <FormControlLabel
              control={(
                <Checkbox
                  name="isSetDefaultShippingAddress"
                  onChange={(e) => formik.setFieldValue(
                    'isSetDefaultShippingAddress',
                    e.target.checked,
                    false,
                  )}
                />
              )}
              label="Set this address as the default shipping address"
            />
          </FormGroup>
        </Grid>
        <Grid item sm={12} xs={12}>
          <FormGroup>
            <FormControlLabel
              control={(
                <Checkbox
                  name="isSetDefaultBillingAddress"
                  onChange={(e) => formik.setFieldValue(
                    'isSetDefaultBillingAddress',
                    e.target.checked,
                    false,
                  )}
                />
              )}
              label="Set this address as the default billing address"
            />
          </FormGroup>
        </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        disabled={isSubmitting}
        fullWidth
      >
        Register
      </Button>
    </form>
  );
};

export default SignUpForm;
