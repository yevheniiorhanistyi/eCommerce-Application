import { FC, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Grid } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import { useSnackbar } from 'notistack';
import CenteredDivider from '../CenteredDivider/CenteredDivider';
import nameValidation from '../../validation/name.validation';
import dateOfBirthlValidation from '../../validation/dateOfBirth.validation';
import editCustomerData from '../../services/profile/editCustomerData';
import emailValidation from '../../validation/email.validation';
import { useModal } from '../ModalProvider/ModalProvider';
import { IGetCustomerData } from '../../types/types';
import formatDateToYYYYMMDD from '../../utils/formatDate';

import styles from './EditDataForm.styles';

type EditDataFormProps = {
  customer: IGetCustomerData;
};

const EditDataForm: FC<EditDataFormProps> = ({
  customer,
}: EditDataFormProps) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const modal = useModal();

  const data = {
    firstName: customer.firstName,
    lastName: customer.lastName,
    dateOfBirth: dayjs(new Date(customer.dateOfBirth)),
    email: customer.email,
  };

  const { enqueueSnackbar } = useSnackbar();

  const createValidationSchema = () => Yup.object().shape({
    firstName: nameValidation.required('First name is required'),
    lastName: nameValidation.required('Last name is required'),
    dateOfBirth: dateOfBirthlValidation,
    email: emailValidation(modal, customer.email),
  });

  const formik = useFormik({
    initialValues: data,
    validationSchema: createValidationSchema(),
    validateOnChange: true,
    onSubmit: async (values) => {
      setSubmitting(true);
      const customerData = {
        ...values,
        dateOfBirth: formatDateToYYYYMMDD(values.dateOfBirth.toDate()),
        versionId: customer.version,
        userId: customer.id,
      };
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
      modal.closeModal('customer', true);
    },
  });

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
            helperText={
              formik.touched.firstName && (formik.errors.firstName as string)
            }
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
            helperText={
              formik.touched.lastName && (formik.errors.lastName as string)
            }
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
                    formik.touched.dateOfBirth
                    && Boolean(formik.errors.dateOfBirth),
                  helperText:
                    formik.touched.dateOfBirth
                    && (formik.errors.dateOfBirth as string),
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
            helperText={formik.touched.email && (formik.errors.email as string)}
            required
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
