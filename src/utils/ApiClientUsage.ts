import {
  ApiRoot,
  createApiBuilderFromCtpClient,
} from '@commercetools/platform-sdk';
import { ctpClient } from './BuildClient';

const projectKey = 'e_com_app';

const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
  projectKey,
});

export const getProject = () => apiRoot
  .categories()
  .get()
  .execute()
  .then(({ body }) => {
    console.log(JSON.stringify(body));
  })
  .catch(console.error);

export default getProject;
