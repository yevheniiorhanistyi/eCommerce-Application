import React, { useState, useEffect } from 'react';
import { Typography, Container } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { getCustomerData } from '../../services/apiIntegration/customers';
import { IGetCustomerAddress, IGetCustomerData } from '../../types/types';

import styles from './CustomerInfo.styles';
import CustomerAddress from '../CustomerAddress/CustomerAddress';
import CustomerData from '../CustomerData/CustomerData';

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

  const primaryCustomerFields = [
    {
      title: 'First name:',
      description: customerData?.firstName,
    },
    {
      title: 'Second name:',
      description: customerData?.lastName,
    },
    {
      title: 'Date of birth:',
      description: customerData?.dateOfBirth,
    },
  ];

  return (
    <Container sx={styles.innerContainer}>
      <Typography sx={styles.addressesTitle} variant="h5">
        Personal data
      </Typography>
      <CustomerData logoIcon={<PermIdentityIcon />} fields={primaryCustomerFields} />
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
