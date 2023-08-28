import React, { useState, useEffect } from 'react';
import { Typography, ListItem, ListItemText } from '@mui/material';
import { getCustomerData } from '../../services/apiIntegration/customers';
import { CustomerAddress } from '../../types/types';

interface CustomerData {
  addresses: Array<CustomerAddress>;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
}

const CustomerInfo: React.FC = () => {
  const [customerData, setCustomerData] = useState<CustomerData>();

  useEffect(() => {
    const fetchCustomerData = async () => {
      const customer = await getCustomerData();
      setCustomerData(customer);
    };
    fetchCustomerData();
  }, []);

  return (
    <>
      <Typography variant="h2">
        Nice to see you,&#x20;
        {customerData?.firstName}
        !
      </Typography>
      <>
        <Typography>
          First name:&#x20;
          {customerData?.firstName}
        </Typography>
        <Typography>
          Last Name:&#x20;
          {customerData?.lastName}
        </Typography>
        <Typography>
          Date of birth:&#x20;
          {customerData?.dateOfBirth}
        </Typography>
        <Typography variant="h5">Addresses:</Typography>
        {customerData?.addresses.map((address) => (
          <ListItem key={address.id}>
            <ListItemText primary="City" secondary={address.city} />
            <ListItemText primary="Street" secondary={address.streetName} />
            <ListItemText primary="Postal code" secondary={address.postalCode} />
          </ListItem>
        ))}
        <Typography variant="h5">Billing addresses:</Typography>
        {' '}
      </>
    </>
  );
};

export default CustomerInfo;
