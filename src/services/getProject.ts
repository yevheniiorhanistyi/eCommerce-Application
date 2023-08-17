import {
  CustomerPagedQueryResponse,
  Project,
} from '@commercetools/platform-sdk';
import { apiRoot } from './ClientBuilder';

export const getProject: () => Promise<Project | null> = async () => {
  try {
    const project = await apiRoot.get().execute();
    return project.body;
  } catch (e) {
    console.error('SDK', e);
    return null;
  }
};
export const getCustomers: () => Promise<
CustomerPagedQueryResponse | ''
> = async () => {
  try {
    const project = await apiRoot.customers().get().execute();
    return project.body;
  } catch (e) {
    console.error('SDK', e);
    return '';
  }
};
