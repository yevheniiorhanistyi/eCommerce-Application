import {
  BaseAddress,
  CustomerDraft,
  CustomerPagedQueryResponse,
} from '@commercetools/platform-sdk';
import { ModalContextType } from '../components/ModalProvider/type';
import { apiRoot } from './ClientBuilder';
import constants from './constants';
import { IAddress, ICustomer } from '../types/types';
import { formatDateToYYYYMMDD } from '../utils/formatDate';

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

export const createAddress = (addressData: IAddress): BaseAddress => {
  const addrress = {
    country: addressData.country,
    postalCode: addressData.postalCode,
    city: addressData.city,
    streetName: addressData.street,
  };
  return addrress;
};

export const createCustomerDraft = (customerData: ICustomer): CustomerDraft => {
  const addresses: BaseAddress[] = [
    createAddress(customerData.addressShipping),
  ];
  const customerDraft: CustomerDraft = {
    email: customerData.email,
    password: customerData.password,
    firstName: customerData.firstName,
    lastName: customerData.lastName,
    dateOfBirth: formatDateToYYYYMMDD(customerData.birthDate),
    addresses,
    shippingAddresses: [0],
    defaultShippingAddress: 0,
    billingAddresses: [0],
    defaultBillingAddress: 0,
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
