import {
  BaseAddress,
  CustomerDraft,
  CustomerPagedQueryResponse,
} from '@commercetools/platform-sdk';
import { ModalContextType } from '../components/ModalProvider/type';
import { apiRoot } from './ClientBuilder';
import constants from './constants';
import { ICustomer } from '../types/types';

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

export const createCustomerDraft = (customerFormData: ICustomer) => {
  // const address: BaseAddress[] = [
  //   {
  //     id: randomUUID(),
  //     country: 'DE',
  //   },
  // ];
  // const customerDraft: CustomerDraft = {
  //   key: randomUUID(),
  //   email: 'test-email-customer' + randomUUID(),
  //   password: 'test-password-customer' + randomUUID(),
  //   addresses: address,
  // };
  // return customerDraft;
};

export const createCustomer = async (
  customerDraft: CustomerDraft,
  modal: ModalContextType,
): Promise<boolean | null> => {
  try {
    const responseCreatedCustomer = await apiRoot
      .customers()
      .post({ body: customerDraft })
      .execute();
    if (responseCreatedCustomer.statusCode === 201) {
      return true;
    }
    throw new Error('buyer not created');
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
