import { apiRoot } from './ClientBuilder';

export const getProject = async () => {
  try {
    const project = await apiRoot.get().execute();
    // console.log('project.body', project.body);
    return project.body;
  } catch (e) {
    console.error('SDK', e);
    return null;
  }
};
export const getCustomers = async () => {
  try {
    const project = await apiRoot.customers().get().execute();
    // console.log('project.body', project.body);
    return project.body;
  } catch (e) {
    console.error('SDK', e);
    return '';
  }
};
