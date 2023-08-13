import { useState } from 'react';
import { Button, TextField, Grid } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import CenteredDivider from '../CenteredDivider/CenteredDivider';

import styles from './SignUpForm.styles';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    birthDate: '',
    street: '',
    city: '',
    postalCode: '',
    country: '',
  });
  const handleSubmit = () => {};
  const handleInputChange = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} sx={styles.contanierGrid}>
        <Grid item sm={12} xs={12}>
          <CenteredDivider caption="Personal information" />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            label="First Name"
            fullWidth
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            label="Last Name"
            fullWidth
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date of birth"
              onChange={handleInputChange}
              sx={styles.birthDate}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item sm={12} xs={12}>
          <CenteredDivider caption="Credentials Information" />
        </Grid>
        <Grid item sm={12} xs={12}>
          <TextField
            label="Email"
            fullWidth
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            label="Password"
            fullWidth
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            label="Confirm Password"
            fullWidth
            type="password"
            name="confirmPassword"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sm={12} xs={12}>
          <CenteredDivider caption="Adress" />
        </Grid>
        <Grid item sm={12} xs={12}>
          <TextField
            label="Street"
            fullWidth
            name="street"
            value={formData.street}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            label="City"
            fullWidth
            name="city"
            value={formData.city}
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
        <Grid item sm={6} xs={12}>
          <TextField
            label="Country"
            fullWidth
            name="country"
            value={formData.country}
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

export default SignUpForm;
