import { useState } from 'react';
import { Typography, Box, Button, TextField, Grid } from '@mui/material';

import styles from './Registration.styles';

const Registration = () => {
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
          <TextField
            label="Date of Birth"
            fullWidth
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item sm={12}>
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
        <Grid item sm={12}>
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
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Register
      </Button>
    </form>
  );
};

export default Registration;
