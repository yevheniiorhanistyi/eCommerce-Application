import {
  BaseAddress,
  CustomerDraft,
  CustomerPagedQueryResponse,
} from '@commercetools/platform-sdk';
import axios from 'axios';
import { ModalContextType } from '../../components/ModalProvider/type';
import { apiRoot } from './ClientBuilder';
import constants from './constants';
import {
  ICustomer,
  IGetCustomerData,
  ICustomerAddressBase,
} from '../../types/types';
import { formatDateToYYYYMMDD } from '../../utils/formatDate';
import { getTokenFromLocalStorage } from '../../utils/authUtils';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const region = import.meta.env.VITE_REACT_APP_API_URL;

export const getCustomerData = async (): Promise<IGetCustomerData> => {
  try {
    const { token } = getTokenFromLocalStorage();
    const response = await axios.get(`${region}/${projectKey}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCustomers = async (
  modal: ModalContextType,
): Promise<CustomerPagedQueryResponse | ''> => {
  try {
    const customers = await apiRoot.customers().get().execute();
    return customers.body;
  } catch (e) {
    modal.openModal();
    modal.setContent({
      title: constants.modal.title,
      text: constants.modal.text,
    });
    console.error('SDK getCustomers', e);
    return '';
  }
};

export const checkEmailCustomer = async (
  email: string,
  modal: ModalContextType,
): Promise<boolean | null> => {
  try {
    const customerToFind = await apiRoot
      .customers()
      .get({
        queryArgs: {
          where: `email="${email}"`,
        },
      })
      .execute();
    return Boolean(customerToFind.body.count);
  } catch (e) {
    modal.openModal();
    modal.setContent({
      title: constants.modal.title,
      text: constants.modal.text,
    });
    console.error('SDK checkEmailCustomer', e);
    return null;
  }
};

export const createAddress = (
  addressData: ICustomerAddressBase,
): BaseAddress => {
  const addrress = {
    country: addressData.country,
    postalCode: addressData.postalCode,
    city: addressData.city,
    streetName: addressData.streetName,
  };
  return addrress;
};

const setDefaultBillingAddress = (customerData: ICustomer): 0 | 1 | void => {
  if (customerData.isSetDefaultBillingAddress) {
    if (customerData.isTwoAddresses) {
      return 1;
    }
    if (!customerData.isTwoAddresses) {
      return 0;
    }
  }
  return undefined;
};

export const createCustomerDraft = (customerData: ICustomer): CustomerDraft => {
  const addresses: BaseAddress[] = [
    createAddress(customerData.addressShipping),
  ];
  if (customerData.isTwoAddresses) addresses.push(createAddress(customerData.addressBilling));
  const customerDraft: CustomerDraft = {
    email: customerData.email,
    password: customerData.password,
    firstName: customerData.firstName,
    lastName: customerData.lastName,
    dateOfBirth: formatDateToYYYYMMDD(customerData.dateOfBirth),
    addresses,
    shippingAddresses: [0],
    defaultShippingAddress: customerData.isSetDefaultShippingAddress
      ? 0
      : undefined,
    billingAddresses: customerData.isTwoAddresses ? [1] : undefined,
    defaultBillingAddress: setDefaultBillingAddress(customerData) ?? undefined,
  };
  return customerDraft;
};

export const createCustomer = async (
  customerData: ICustomer,
  modal: ModalContextType,
): Promise<boolean | null> => {
  try {
    const customerDraft = createCustomerDraft(customerData);
    const responseCreatedCustomer = await apiRoot
      .customers()
      .post({ body: customerDraft })
      .execute();
    if (responseCreatedCustomer.statusCode === 201) {
      return true;
    }
    return false;
  } catch (e) {
    modal.openModal();
    modal.setContent({
      title: constants.modal.title,
      text: constants.modal.text,
    });
    console.error('SDK createCustomer', e);
    return null;
  }
};
