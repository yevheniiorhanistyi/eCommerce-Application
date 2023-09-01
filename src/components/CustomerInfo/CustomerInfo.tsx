import React, { useState, useEffect } from 'react';
import { Typography, Container } from '@mui/material';
import { getCustomerData } from '../../services/apiIntegration/customers';
import { IGetCustomerAddress, IGetCustomerData } from '../../types/types';

import styles from './CustomerInfo.styles';
import CustomerAddress from '../CustomerAddress/CustomerAddress';

const CustomerInfo: React.FC = () => {
  const [customerData, setCustomerData] = useState<IGetCustomerData>();
  const [shippingAddresses, setShippingAddresses] = useState<
  IGetCustomerAddress[]
  >([]);
  const [billingAddresses, setBillingAddresses] = useState<
  IGetCustomerAddress[]
  >([]);

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
      <Typography sx={styles.addressesTitle} variant="h5">
        Shipping addresses:
      </Typography>
      <CustomerAddress
        addresses={shippingAddresses}
        defaultAddressId={customerData?.defaultShippingAddressId}
      />
      <Typography sx={styles.addressesTitle} variant="h5">
        Billing addresses:
      </Typography>
      <CustomerAddress
        addresses={billingAddresses}
        defaultAddressId={customerData?.defaultBillingAddressId}
      />
    </Container>
  );
};

export default CustomerInfo;
