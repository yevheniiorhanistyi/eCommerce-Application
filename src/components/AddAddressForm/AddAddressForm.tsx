import { FC, useEffect, useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
  SelectChangeEvent,
} from '@mui/material';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import nameValidation from '../../validation/name.validation';
import { ICountry, ICustomerAddressBase } from '../../types/types';

import { useModal } from '../ModalProvider/ModalProvider';
import notEmtyValidation from '../../validation/notEmty.validation';
import getCountries from '../../services/apiIntegration/getCountries';
import { addAddress } from '../../services/profile/addAddress';
import createPostalCodeValidationSingle from '../../validation/postalCodeSingle.validation';

import styles from './AddAddressForm.styles';

interface AddAddressModalFormProps {
  userId: string;
  versionId: number;
  isBilling: boolean;
}

const AddAddressForm: FC<AddAddressModalFormProps> = ({
  userId,
  isBilling,
  versionId,
}: AddAddressModalFormProps) => {
  const [isContrySelected, setIsContrySelected] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [isSubmitting, setSubmitting] = useState(false);
  const modal = useModal();

  const { enqueueSnackbar } = useSnackbar();

  const labelSelectCountry = 'Country';

  useEffect(() => {
    const fetchData = async () => {
      const countriesData = await getCountries(modal);
      setCountries(countriesData);
    };

    fetchData();
  }, []);

  const addressValidation = (countryField: string, validateFields = true) => Yup.object().shape({
    streetName: validateFields ? notEmtyValidation : Yup.string(),
    city: validateFields
      ? nameValidation.required('City is required')
      : Yup.string(),
    country: validateFields
      ? notEmtyValidation.required('Country is required')
      : Yup.string(),
    postalCode: validateFields
      ? createPostalCodeValidationSingle(countryField)
      : Yup.string(),
  });

  const formData: ICustomerAddressBase = {
    streetName: '',
    city: '',
    postalCode: '',
    country: '',
  };

  const formik = useFormik({
    initialValues: formData,
    validationSchema: addressValidation(selectedCountry),
    validateOnChange: true,
    onSubmit: async (values) => {
      const address = values as ICustomerAddressBase;
      setSubmitting(true);
      try {
        const isCreated = await addAddress(
          address,
          userId,
          versionId,
          isBilling,
        );
        if (isCreated) {
          enqueueSnackbar('You have successfully add new address!', {
            variant: 'success',
          });
          modal.closeModal('address', true);
        }
      } catch (error) {
        enqueueSnackbar('Adding address failed, please try again later', {
          variant: 'error',
        });
      } finally {
        formik.resetForm();
      }

      setSubmitting(false);
    },
  });

  const handleSelectChange = (
    nameFiled: string,
    e: SelectChangeEvent<string>,
  ) => {
    const { value } = e.target;
    formik.setFieldValue(nameFiled, value).then((error) => {
      formik.validateField(nameFiled).then(() => {
        if (error && nameFiled in error) {
          setIsContrySelected(true);
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
          <TextField
            fullWidth
            name="streetName"
            label="Street"
            value={formik.values.streetName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.streetName && Boolean(formik.errors.streetName)
            }
            helperText={formik.touched.streetName && formik.errors.streetName}
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
            onBlur={formik.handleBlur}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
            required
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <FormControl
            fullWidth
            error={Boolean(formik.touched.country && formik.errors.country)}
          >
            <InputLabel id="labelSelectContryId">
              {labelSelectCountry}
            </InputLabel>
            <Select
              labelId="labelSelectContryId"
              id="selectContry"
              label={labelSelectCountry}
              fullWidth
              name="country"
              value={formik.values.country}
              onChange={(e) => handleSelectChange('country', e)}
              required
            >
              {countries.map((item) => (
                <MenuItem key={item.codeCountry} value={item.codeCountry}>
                  {item.nameCountry}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>
              {formik.touched.country && formik.errors.country}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            label="Postal Code"
            fullWidth
            name="postalCode"
            value={formik.values.postalCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.postalCode && Boolean(formik.errors.postalCode)
            }
            helperText={formik.touched.postalCode && formik.errors.postalCode}
            required
            disabled={!isContrySelected}
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

export default AddAddressForm;
