import React, { useState, useEffect } from 'react';
import { Typography, ListItem, ListItemText, Container } from '@mui/material';
import { getCustomerData } from '../../services/apiIntegration/customers';
import { IGetCustomerAddress, IGetCustomerData } from '../../types/types';

import styles from './CustomerInfo.styles';

const CustomerInfo: React.FC = () => {
  const [customerData, setCustomerData] = useState<IGetCustomerData>();
  const [shippingAddresses, setShippingAddresses] = useState<IGetCustomerAddress[]>(
    [],
  );
  const [billingAddresses, setBillingAddresses] = useState<IGetCustomerAddress[]>(
    [],
  );

  useEffect(() => {
    const fetchCustomerData = async () => {
      const customer = await getCustomerData();
      setCustomerData(customer);

      const customerBillingAddresses: IGetCustomerAddress[] = [];
      const customerShippingAddresses: IGetCustomerAddress[] = [];

      customer.addresses?.forEach((address) => {
        if (customer.billingAddressIds.includes(address.id)) {
          customerBillingAddresses.push(address);
        } else {
          customerShippingAddresses.push(address);
        }
      });
      setShippingAddresses(customerShippingAddresses);
      setBillingAddresses(customerBillingAddresses);
    };

    fetchCustomerData();
  }, []);

  return (
    <Container sx={styles.innerContainer}>
      <Typography variant="h2">
        Nice to see you,&#x20;
        {customerData?.firstName}
        !
      </Typography>
      <Container sx={styles.mainCustomerInfo} disableGutters>
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

      </Container>
      <Typography sx={styles.addressesTitle} variant="h5">Shipping addresses:</Typography>
      {shippingAddresses.map((address, index) => (
        <ListItem key={address.id} sx={styles.addressItem}>
          <ListItemText primaryTypographyProps={{ style: styles.addressItemDataLabel }} primary={index + 1} secondary={customerData?.defaultShippingAddressId === address.id ? 'default' : ''} sx={styles.addressItemData} />
          <ListItemText primaryTypographyProps={{ style: styles.addressItemDataLabel }} primary="Country" secondary={!address.country ? '-' : address.country} sx={styles.addressItemData} />
          <ListItemText primaryTypographyProps={{ style: styles.addressItemDataLabel }} primary="City" secondary={!address.city ? '-' : address.city} sx={styles.addressItemData} />
          <ListItemText primaryTypographyProps={{ style: styles.addressItemDataLabel }} primary="Street" secondary={!address.streetName ? '-' : address.streetName} sx={styles.addressItemData} />
          <ListItemText primaryTypographyProps={{ style: styles.addressItemDataLabel }} primary="Postal code" secondary={!address.postalCode ? '-' : address.postalCode} sx={styles.addressItemData} />
        </ListItem>
      ))}
      <Typography sx={styles.addressesTitle} variant="h5">Billing addresses:</Typography>
      {billingAddresses.map((address, index) => (
        <ListItem key={address.id} sx={styles.addressItem}>
          <ListItemText primaryTypographyProps={{ style: styles.addressItemDataLabel }} primary={index + 1} secondary={customerData?.defaultBillingAddressId === address.id ? 'default' : ''} sx={styles.addressItemData} />
          <ListItemText primaryTypographyProps={{ style: styles.addressItemDataLabel }} primary="Country" secondary={!address.country ? '-' : address.country} sx={styles.addressItemData} />
          <ListItemText primaryTypographyProps={{ style: styles.addressItemDataLabel }} primary="City" secondary={!address.city ? '-' : address.city} sx={styles.addressItemData} />
          <ListItemText primaryTypographyProps={{ style: styles.addressItemDataLabel }} primary="Street" secondary={!address.streetName ? '-' : address.streetName} sx={styles.addressItemData} />
          <ListItemText primaryTypographyProps={{ style: styles.addressItemDataLabel }} primary="Postal code" secondary={!address.postalCode ? '-' : address.postalCode} sx={styles.addressItemData} />
        </ListItem>
      ))}
    </Container>
  );
};

export default CustomerInfo;
