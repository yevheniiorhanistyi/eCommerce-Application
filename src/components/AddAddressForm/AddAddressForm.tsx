import { useState } from 'react';
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
  FormHelperText,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Collapse,
} from '@mui/material';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import CenteredDivider from '../CenteredDivider/CenteredDivider';
import styles from './AddAddressForm.styles';
import nameValidation from '../../validation/name.validation';
import { IEditDataForm } from '../../types/types';

import editCustomerData from '../../services/editCustomerData/editCustomerData';
import { useModal } from '../ModalProvider/ModalProvider';
import notEmtyValidation from '../../validation/notEmty.validation';
import createPostalCodeValidation from '../../validation/postalCode.validation';

const AddAddressForm: React.FC = (onEditDataSuccess, customer) => {
  const modal = useModal();
  const [showPassword, setShowPassword] = useState(false);
  const [isContrySelected, setIsContrySelected] = useState({
    addressShipping: false,
    addressBilling: false,
  });
  const [selectedCountry, setSelectedCountry] = useState({
    addressShipping: '',
    addressBilling: '',
  });

  const [data, setData] = useState({
    firstName: customer.firstName,
    lastName: customer.lastName,
    dateOfBirth: customer.dateOfBirth,
  });

  const [isSubmitting, setSubmitting] = useState(false);
  const [isVisibleAddressBilling, setIsVisibleAddressBilling] = useState(false);

  const { enqueueSnackbar } = useSnackbar();

  const labelSelectCountry = 'Contry';

  useEffect(() => {
    const fetchData = async () => {
      const countriesData = await getCountries(modal);
      setCountries(countriesData);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addressValidation = (
    countryField: Record<string, string>,
    nameFiled: string,
    validateFields = true,
  ) =>
    Yup.object().shape({
      street: validateFields ? notEmtyValidation : Yup.string(),
      city: validateFields
        ? nameValidation.required('City is required')
        : Yup.string(),
      country: validateFields
        ? notEmtyValidation.required('Country is required')
        : Yup.string(),
      postalCode: validateFields
        ? createPostalCodeValidation(countryField)(nameFiled)
        : Yup.string(),
    });

  const createValidationSchema = (countryField: Record<string, string>) =>
    Yup.object().shape({
      addressShipping: addressValidation(countryField, 'addressShipping'),
      addressBilling: addressValidation(
        countryField,
        'addressBilling',
        isVisibleAddressBilling,
      ),
    });

  const defaultAddressValues: ICustomerAddressBase = {
    streetName: '',
    city: '',
    postalCode: '',
    country: '',
  };

  const formData = {
    addressShipping: { ...defaultAddressValues },
    addressBilling: { ...defaultAddressValues },
    isSetDefaultShippingAddress: false,
    isSetDefaultBillingAddress: false,
    isTwoAddresses: false,
  };

  const formik = useFormik({
    initialValues: formData,
    validationSchema: createValidationSchema(selectedCountry),
    validateOnChange: true,
    onSubmit: async (values) => {
      const customerData = values;
      setSubmitting(true);
      const isAdd = await editCustomerData(customerData);
      if (isAdd) {
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
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
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
              control={
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
              }
              label="Use different addresses for shipping and billing"
            />
          </FormGroup>
        </Grid>
        <Grid item sm={12} xs={12}>
          <TextField
            fullWidth
            name="addressShipping.street"
            label="Street"
            value={formik.values.addressShipping.streetName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.errors.addressShipping &&
              formik.touched.addressShipping?.streetName &&
              Boolean(formik.errors.addressShipping.streetName)
            }
            helperText={
              formik.errors.addressShipping &&
              formik.touched.addressShipping?.streetName &&
              formik.errors.addressShipping.streetName
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
              formik.errors.addressShipping &&
              formik.touched.addressShipping?.city &&
              Boolean(formik.errors.addressShipping.city)
            }
            helperText={
              formik.errors.addressShipping &&
              formik.touched.addressShipping?.city &&
              formik.errors.addressShipping.city
            }
            required
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <FormControl
            fullWidth
            error={Boolean(
              formik.errors.addressShipping &&
                formik.touched.addressShipping?.country &&
                formik.errors.addressShipping.country,
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
                <MenuItem key={item.codeCountry} value={item.codeCountry}>
                  {item.nameCountry}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              {formik.errors.addressShipping &&
                formik.touched.addressShipping?.country &&
                formik.errors.addressShipping.country}
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
              formik.errors.addressShipping &&
              formik.touched.addressShipping?.postalCode &&
              Boolean(formik.errors.addressShipping.postalCode)
            }
            helperText={
              formik.errors.addressShipping &&
              formik.touched.addressShipping?.postalCode &&
              formik.errors.addressShipping.postalCode
            }
            required
            disabled={!isContrySelected.addressShipping}
          />
        </Grid>
        <Grid item sm={12} xs={12}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="isSetDefaultShippingAddress"
                  onChange={(e) =>
                    formik.setFieldValue(
                      'isSetDefaultShippingAddress',
                      e.target.checked,
                      false,
                    )
                  }
                />
              }
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
                value={formik.values.addressBilling.streetName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.errors.addressBilling &&
                  formik.touched.addressBilling?.streetName &&
                  Boolean(formik.errors.addressBilling.streetName)
                }
                helperText={
                  formik.errors.addressBilling &&
                  formik.touched.addressBilling?.streetName &&
                  formik.errors.addressBilling.streetName
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
                  formik.errors.addressBilling &&
                  formik.touched.addressBilling?.city &&
                  Boolean(formik.errors.addressBilling.city)
                }
                helperText={
                  formik.errors.addressBilling &&
                  formik.touched.addressBilling?.city &&
                  formik.errors.addressBilling.city
                }
                required
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <FormControl
                fullWidth
                error={Boolean(
                  formik.errors.addressBilling &&
                    formik.touched.addressBilling?.country &&
                    formik.errors.addressBilling.country,
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
                  onChange={(e) =>
                    handleSelectChange('addressBilling.country', e)
                  }
                  required
                >
                  {countries.map((item) => (
                    <MenuItem key={item.codeCountry} value={item.codeCountry}>
                      {item.nameCountry}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>
                  {formik.errors.addressBilling &&
                    formik.touched.addressBilling?.country &&
                    formik.errors.addressBilling.country}
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
                  formik.errors.addressBilling &&
                  formik.touched.addressBilling?.postalCode &&
                  Boolean(formik.errors.addressBilling.postalCode)
                }
                helperText={
                  formik.errors.addressBilling &&
                  formik.touched.addressBilling?.postalCode &&
                  formik.errors.addressBilling.postalCode
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
              control={
                <Checkbox
                  name="isSetDefaultBillingAddress"
                  onChange={(e) =>
                    formik.setFieldValue(
                      'isSetDefaultBillingAddress',
                      e.target.checked,
                      false,
                    )
                  }
                />
              }
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
        Save
      </Button>
    </form>
  );
};

export default AddAddressForm;
