import { useState, useEffect } from 'react';
import { Typography, Container, Box } from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { getCustomerData } from '../../services/apiIntegration/customers';
import { ICustomerAddressBase, IGetCustomerData } from '../../types/types';

import CustomerAddress from '../CustomerAddress/CustomerAddress';
import CustomerData from '../CustomerData/CustomerData';
import AddIconButton from '../buttons/AddIconButton/AddIconButton';
import PassworData from '../PasswordData/PasswordData';
import setDefaultAddress from '../../services/profile/setDefaultAddress';
import CustomerDataLoader from '../CustomerDataLoader/CustomerDataLoader';

import styles from './CustomerInfo.styles';

const CustomerInfo: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [customerData, setCustomerData] = useState<IGetCustomerData>();
  const [shippingAddresses, setShippingAddresses] = useState<
  ICustomerAddressBase[]
  >([]);
  const [billingAddresses, setBillingAddresses] = useState<
  ICustomerAddressBase[]
  >([]);

  useEffect(() => {
    fetchCustomerData();
  }, []);

  const fetchCustomerData = async () => {
    const customer = await getCustomerData();
    setCustomerData(customer);

    const customerBillingAddresses: ICustomerAddressBase[] = [];
    const customerShippingAddresses: ICustomerAddressBase[] = [];

    customer.addresses?.forEach((address) => {
      if (customer.billingAddressIds.includes(address.id as string)) {
        customerBillingAddresses.push(address);
      } else {
        customerShippingAddresses.push(address);
      }
    });
    setShippingAddresses(customerShippingAddresses);
    setBillingAddresses(customerBillingAddresses);
    setIsLoading(false);
  };

  const onActionSuccess = () => {
    fetchCustomerData();
  };

  const setAsDefault = async (addressId: string, isBillingAddress: boolean) => {
    await setDefaultAddress({
      userId: customerData?.id as string,
      versionId: customerData?.version as number,
      addressId,
      isBillingAddress,
    });
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

  if (isLoading) {
    return (
      <Container sx={styles.innerContainer}>
        <CustomerDataLoader />
      </Container>
    );
  }
  return (
    <Container sx={styles.innerContainer}>
      <Typography sx={styles.addressesTitle} variant="h5">
        Personal data
      </Typography>
      <CustomerData
        customer={customerData as IGetCustomerData}
        logoIcon={<PermIdentityIcon />}
        fields={primaryCustomerFields}
        addSuccess={onActionSuccess}
      />
      <Typography sx={styles.addressesTitle} variant="h5">
        Password
      </Typography>
      <PassworData
        customer={customerData as IGetCustomerData}
        addSuccess={onActionSuccess}
      />
      <Box sx={styles.flexBox}>
        <Typography sx={styles.addressesTitle} variant="h5">
          Shipping addresses:
        </Typography>
        <AddIconButton
          userId={customerData?.id as string}
          isBilling={false}
          versionId={customerData?.version as number}
          addSuccess={onActionSuccess}
        />
      </Box>
      <CustomerAddress
        addresses={shippingAddresses}
        defaultAddressId={customerData?.defaultShippingAddressId}
        versionId={customerData?.version as number}
        userId={customerData?.id as string}
        deleteSuccess={onActionSuccess}
        editSuccess={onActionSuccess}
        customer={customerData as IGetCustomerData}
        setAsDefault={setAsDefault}
        isBillingAddress={false}
      />
      <Box sx={styles.flexBox}>
        <Typography sx={styles.addressesTitle} variant="h5">
          Billing addresses:
        </Typography>
        <AddIconButton
          userId={customerData?.id as string}
          isBilling
          versionId={customerData?.version as number}
          addSuccess={onActionSuccess}
        />
      </Box>
      <CustomerAddress
        addresses={billingAddresses}
        defaultAddressId={customerData?.defaultBillingAddressId}
        versionId={customerData?.version as number}
        userId={customerData?.id as string}
        deleteSuccess={onActionSuccess}
        editSuccess={onActionSuccess}
        customer={customerData as IGetCustomerData}
        setAsDefault={setAsDefault}
        isBillingAddress
      />
    </Container>
  );
};

export default CustomerInfo;
