import { IAddress, ICustomerForm } from '../../../types/types';

export const defaultAddressValues: IAddress = {
  street: '',
  city: '',
  postalCode: '',
  country: '',
};

export const defaultDataValues: ICustomerForm = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
  lastName: '',
  birthDate: null,
  addressShipping: { ...defaultAddressValues },
  addressBilling: { ...defaultAddressValues },
  isSetDefaultShippingAddress: false,
  isSetDefaultBillingAddress: false,
  isTwoAddresses: false,
};
