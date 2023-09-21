import { FC, useEffect, useRef, useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  InputAdornment,
  IconButton,
} from '@mui/material';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useModal } from '../ModalProvider/ModalProvider';
import passwordValidation from '../../validation/password.validation';
import confirmFiled from '../../validation/confirmFiled';
import { IGetCustomerData } from '../../types/types';
import changePassword from '../../services/profile/changePassword';
import { authenticateClient } from '../../services/authenticate/authenticateClient';

import styles from './EditPasswordForm.styles';

type EditPasswordFormProps = {
  onEditDataSuccess: () => void;
  customer: IGetCustomerData;
};

const EditPasswordForm: FC<EditPasswordFormProps> = ({
  onEditDataSuccess,
  customer,
}: EditPasswordFormProps) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isCurrentPasswordValid, setIsCurrentPasswordValid] = useState(false);
  const [isNewPasswordValid, setIsNewPasswordValid] = useState(false);

  const confirmPasswordRef = useRef<HTMLInputElement | null>(null);
  const newPasswordRef = useRef<HTMLInputElement | null>(null);

  const modal = useModal();

  useEffect(() => {
    if (isNewPasswordValid && confirmPasswordRef.current) {
      confirmPasswordRef.current.focus();
    }
  }, [isNewPasswordValid]);

  useEffect(() => {
    if (isCurrentPasswordValid && newPasswordRef.current) {
      newPasswordRef.current.focus();
    }
  }, [isCurrentPasswordValid]);

  const { enqueueSnackbar } = useSnackbar();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handlerCancel = () => {
    modal.closeModal('password', false);
    enqueueSnackbar('Password change failed', {
      variant: 'error',
    });
  };

  const data = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  };

  const createValidationSchema = () => Yup.object().shape({
    currentPassword: passwordValidation,
    newPassword: passwordValidation,
    confirmPassword: confirmFiled('newPassword', 'Passwords must match'),
  });

  const formik = useFormik({
    initialValues: data,
    validationSchema: createValidationSchema(),
    validateOnChange: true,
    onSubmit: async (values) => {
      setSubmitting(true);
      const changePasswordData = {
        ...values,
        versionId: customer.version,
        userId: customer.id,
      };
      const stateChange = await changePassword(changePasswordData);
      if (stateChange) {
        if (typeof stateChange === 'string') {
          enqueueSnackbar(stateChange, {
            variant: 'error',
          });
        } else {
          enqueueSnackbar('Changes saved succesfully!', {
            variant: 'success',
          });
          try {
            await authenticateClient({
              email: customer.email,
              password: values.newPassword,
            });
          } catch (error) {
            modal.openModal('error', false);
            modal.setContent('error', {
              title: 'Sorry',
              text: 'Sing in failed, please try again later',
            });
          } finally {
            formik.resetForm();
          }
        }
      } else {
        enqueueSnackbar('Saving failed, please try again later.', {
          variant: 'error',
        });
      }
      setSubmitting(false);
      modal.closeModal('password', true);
    },
  });

  useEffect(() => {
    setIsNewPasswordValid(
      !formik.errors.newPassword && Boolean(formik.values.newPassword),
    );
  }, [formik.errors.newPassword, formik.values.newPassword]);

  useEffect(() => {
    setIsCurrentPasswordValid(
      !formik.errors.currentPassword && Boolean(formik.values.currentPassword),
    );
  }, [formik.errors.currentPassword, formik.values.currentPassword]);

  return (
    <form onSubmit={formik.handleSubmit} noValidate>
      <Grid container spacing={2} sx={styles.contanierGrid}>
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            name="currentPassword"
            label="Current password"
            value={formik.values.currentPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.currentPassword
              && Boolean(formik.errors.currentPassword)
            }
            helperText={
              formik.touched.currentPassword && formik.errors.currentPassword
            }
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
        <Grid item sm={6} xs={0} />
        <Grid item sm={6} xs={12}>
          <TextField
            fullWidth
            type={showPassword ? 'text' : 'password'}
            name="newPassword"
            label="New password"
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
            }
            helperText={formik.touched.newPassword && formik.errors.newPassword}
            required
            disabled={!isCurrentPasswordValid}
            inputRef={newPasswordRef}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePassword}
                    edge="end"
                    disabled={!isCurrentPasswordValid}
                  >
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
            disabled={!isNewPasswordValid}
            inputRef={confirmPasswordRef}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePassword}
                    edge="end"
                    disabled={!isNewPasswordValid}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            fullWidth
          >
            Save
          </Button>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Button
            type="button"
            variant="contained"
            onClick={handlerCancel}
            disabled={isSubmitting}
            fullWidth
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default EditPasswordForm;
