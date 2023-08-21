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
  Collapse,
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
import createPostalCodeValidation from '../../validation/postalCode.validation';
import { useModal } from '../ModalProvider/ModalProvider';
import {
  IAddress,
  ICountrie,
  ICustomer,
  ICustomerForm,
} from '../../types/types';
import { createCustomer } from '../../services/customers';
import birthDatelValidation from '../../validation/birthDate.validation';

const SignUpForm: React.FC = () => {
  const modal = useModal();
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isContrySelected, setIsContrySelected] = useState({
    addressShipping: false,
    addressBilling: false,
  });
  const [selectedCountry, setSelectedCountry] = useState({
    addressShipping: '',
    addressBilling: '',
  });
  const [countries, setCountries] = useState<ICountrie[]>([]);
  const [isSubmitting, setSubmitting] = useState(false);
  const [isVisibleAddressBilling, setIsVisibleAddressBilling] = useState(false);

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

  const addressValidation = (
    countryField: Record<string, string>,
    nameFiled: string,
  ) => Yup.object().shape({
    street: notEmtyValidation,
    city: nameValidation.required('City is required'),
    country: notEmtyValidation,
    postalCode: createPostalCodeValidation(countryField)(nameFiled),
  });

  const createValidationSchema = (
    countryField: Record<string, string>,
    email: string,
  ) => Yup.object().shape({
    firstName: nameValidation.required('First name is required'),
    lastName: nameValidation.required('Last name is required'),
    birthDate: birthDatelValidation,
    email: emailValidation(modal),
    password: passwordValidation,
    confirmPassword: confirmFiled('password', 'Passwords must match'),
    addressShipping: addressValidation(countryField, 'addressShipping'),
    addressBilling: addressValidation(countryField, 'addressBilling'),
  });

  const defaultAddressValues: IAddress = {
    street: '',
    city: '',
    postalCode: '',
    country: '',
  };

  const formData: ICustomerForm = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    birthDate: null,
    addressShipping: { ...defaultAddressValues },
    addressBilling: { ...defaultAddressValues },
    isSetDefaultShippingAddress: false,
    isSetDefaultBillingAddress: false,
    isTwoAddresses: false,
  };

  const formik = useFormik({
    initialValues: formData,
    validationSchema: createValidationSchema(selectedCountry, ''),
    validateOnChange: false,
    onSubmit: async (values) => {
      const customerData = values as ICustomer;
      setSubmitting(true);
      const isCreate = await createCustomer(customerData, modal);
      if (isCreate) {
        modal.openModal();
        modal.setContent({
          title: 'Congratulations',
          text: 'You have successfully registered',
        });
      } else {
        modal.openModal();
        modal.setContent({
          title: 'Sorry',
          text: 'Registration failed, please try again later',
        });
      }
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
        const nameFiledAdrress = nameFiled.split('.')[0];
        if (error && nameFiled in error) {
          setIsContrySelected((prevState) => ({
            ...prevState,
            [nameFiledAdrress]: true,
          }));
        } else {
          setIsContrySelected((prevState) => ({
            ...prevState,
            [nameFiledAdrress]: true,
          }));
          setSelectedCountry((prevState) => ({
            ...prevState,
            [nameFiledAdrress]: value,
          }));
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
          <CenteredDivider
            caption={isVisibleAddressBilling ? 'Adrress Shipping' : 'Adrress'}
          />
        </Grid>
        <Grid item sm={12} xs={12}>
          <FormGroup>
            <FormControlLabel
              control={(
                <Checkbox
                  name="isTwoAddresses"
                  onChange={(e) => {
                    formik.setFieldValue(
                      'isTwoAddresses',
                      e.target.checked,
                      false,
                    );
                    setIsVisibleAddressBilling(e.target.checked);
                  }}
                />
              )}
              label="Use different addresses for shipping and billing"
            />
          </FormGroup>
        </Grid>
        <Grid item sm={12} xs={12}>
          <TextField
            fullWidth
            name="addressShipping.street"
            label="Street"
            value={formik.values.addressShipping.street}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.addressShipping
              && formik.touched.addressShipping?.street
              && Boolean(formik.errors.addressShipping.street)
            }
            helperText={
              formik.errors.addressShipping
              && formik.touched.addressShipping?.street
              && formik.errors.addressShipping.street
            }
            required
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            name="addressShipping.city"
            label="City"
            value={formik.values.addressShipping.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.addressShipping
              && formik.touched.addressShipping?.city
              && Boolean(formik.errors.addressShipping.city)
            }
            helperText={
              formik.errors.addressShipping
              && formik.touched.addressShipping?.city
              && formik.errors.addressShipping.city
            }
            required
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <FormControl
            fullWidth
            error={Boolean(
              formik.errors.addressShipping
                && formik.touched.addressShipping?.country
                && formik.errors.addressShipping.country,
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
              name="addressShipping.country"
              value={formik.values.addressShipping.country}
              onChange={(e) => handleSelectChange('addressShipping.country', e)}
              required
            >
              {countries.map((item) => (
                <MenuItem key={item.codeCountrie} value={item.codeCountrie}>
                  {item.nameCountrie}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              {formik.errors.addressShipping
                && formik.touched.addressShipping?.country
                && formik.errors.addressShipping.country}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            label="Postal Code"
            fullWidth
            name="addressShipping.postalCode"
            value={formik.values.addressShipping.postalCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.addressShipping
              && formik.touched.addressShipping?.postalCode
              && Boolean(formik.errors.addressShipping.postalCode)
            }
            helperText={
              formik.errors.addressShipping
              && formik.touched.addressShipping?.postalCode
              && formik.errors.addressShipping.postalCode
            }
            required
            disabled={!isContrySelected.addressShipping}
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
        <Collapse in={isVisibleAddressBilling} sx={styles.collapse}>
          <Grid container spacing={2} sx={styles.contanierGrid}>
            <Grid item sm={12} xs={12}>
              <CenteredDivider caption="Adrress Billing" />
            </Grid>
            <Grid item sm={12} xs={12}>
              <TextField
                fullWidth
                name="addressBilling.street"
                label="Street"
                value={formik.values.addressBilling.street}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.addressBilling
                  && formik.touched.addressBilling?.street
                  && Boolean(formik.errors.addressBilling.street)
                }
                helperText={
                  formik.errors.addressBilling
                  && formik.touched.addressBilling?.street
                  && formik.errors.addressBilling.street
                }
                required
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                fullWidth
                name="addressBilling.city"
                label="City"
                value={formik.values.addressBilling.city}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.addressBilling
                  && formik.touched.addressBilling?.city
                  && Boolean(formik.errors.addressBilling.city)
                }
                helperText={
                  formik.errors.addressBilling
                  && formik.touched.addressBilling?.city
                  && formik.errors.addressBilling.city
                }
                required
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <FormControl
                fullWidth
                error={Boolean(
                  formik.errors.addressBilling
                    && formik.touched.addressBilling?.country
                    && formik.errors.addressBilling.country,
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
                  name="addressBilling.country"
                  value={formik.values.addressBilling.country}
                  onChange={(e) => handleSelectChange('addressBilling.country', e)}
                  required
                >
                  {countries.map((item) => (
                    <MenuItem key={item.codeCountrie} value={item.codeCountrie}>
                      {item.nameCountrie}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>
                  {formik.errors.addressBilling
                    && formik.touched.addressBilling?.country
                    && formik.errors.addressBilling.country}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                label="Postal Code"
                fullWidth
                name="addressBilling.postalCode"
                value={formik.values.addressBilling.postalCode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.addressBilling
                  && formik.touched.addressBilling?.postalCode
                  && Boolean(formik.errors.addressBilling.postalCode)
                }
                helperText={
                  formik.errors.addressBilling
                  && formik.touched.addressBilling?.postalCode
                  && formik.errors.addressBilling.postalCode
                }
                required
                disabled={!isContrySelected.addressBilling}
              />
            </Grid>
          </Grid>
        </Collapse>
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
