import React, { useState, useEffect } from 'react';
import { Typography, Container, Box } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { getCustomerData } from '../../services/apiIntegration/customers';
import { IGetCustomerAddress, IGetCustomerData } from '../../types/types';

import styles from './CustomerInfo.styles';
import CustomerAddress from '../CustomerAddress/CustomerAddress';
import CustomerData from '../CustomerData/CustomerData';
import AddIconButton from '../buttons/AddIconButton/AddIconButton';
import PassworData from '../PasswordData/PasswordData';

const CustomerInfo: React.FC = () => {
  const [customerData, setCustomerData] = useState<IGetCustomerData>();
  const [shippingAddresses, setShippingAddresses] = useState<
  IGetCustomerAddress[]
  >([]);
  const [billingAddresses, setBillingAddresses] = useState<
  IGetCustomerAddress[]
  >([]);

  useEffect(() => {
    fetchCustomerData();
  }, []);

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

  const onDeleteSuccess = () => {
    fetchCustomerData();
  };

  const onAddSuccess = () => {
    fetchCustomerData();
  };

  const onEditSuccess = () => {
    fetchCustomerData();
  };

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
    {
      title: 'Email:',
      description: customerData?.email,
    },
  ];

  return (
    <Container sx={styles.innerContainer}>
      <Typography sx={styles.addressesTitle} variant="h5">
        Personal data
      </Typography>
      <CustomerData
        customer={customerData as IGetCustomerData}
        logoIcon={<PermIdentityIcon />}
        fields={primaryCustomerFields}
        addSuccess={onEditSuccess}
      />
      <Typography sx={styles.addressesTitle} variant="h5">
        Password
      </Typography>
      <PassworData
        customer={customerData as IGetCustomerData}
        addSuccess={onEditSuccess}
      />
      <Box sx={styles.flexBox}>
        <Typography sx={styles.addressesTitle} variant="h5">
          Shipping addresses:
        </Typography>
        <AddIconButton
          userId={customerData?.id as string}
          isBilling={false}
          versionId={customerData?.version as number}
          addSuccess={onAddSuccess}
        />
      </Box>
      <CustomerAddress
        addresses={shippingAddresses}
        defaultAddressId={customerData?.defaultShippingAddressId}
        versionId={customerData?.version as number}
        userId={customerData?.id as string}
        deleteSuccess={onDeleteSuccess}
        editSuccess={onEditSuccess}
        customer={customerData as IGetCustomerData}
      />
      <Box sx={styles.flexBox}>
        <Typography sx={styles.addressesTitle} variant="h5">
          Billing addresses:
        </Typography>
        <AddIconButton
          userId={customerData?.id as string}
          isBilling
          versionId={customerData?.version as number}
          addSuccess={onAddSuccess}
        />
      </Box>
      <CustomerAddress
        addresses={billingAddresses}
        defaultAddressId={customerData?.defaultBillingAddressId}
        versionId={customerData?.version as number}
        userId={customerData?.id as string}
        deleteSuccess={onDeleteSuccess}
        editSuccess={onEditSuccess}
        customer={customerData as IGetCustomerData}
      />
    </Container>
  );
};

export default CustomerInfo;
