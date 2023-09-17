import {
  ClientBuilder,
  Client,
  AuthMiddlewareOptions,
  HttpMiddlewareOptions,
} from '@commercetools/sdk-client-v2';
import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';

export const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY || '';

const authMiddlewareOptions: AuthMiddlewareOptions = {
  host:
    import.meta.env.VITE_REACT_APP_AUTH_URL
    || 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey,
  credentials: {
    clientId: import.meta.env.VITE_REACT_APP_CLIENT_ID || '',
    clientSecret: import.meta.env.VITE_REACT_APP_CLIENT_SECRET || '',
  },
  scopes: [import.meta.env.VITE_REACT_APP_SCOPES],
  fetch,
};

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host:
    import.meta.env.VITE_REACT_APP_API_URL
    || 'https://api.europe-west1.gcp.commercetools.com',
  fetch,
};

const client: Client = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .build();

export const apiRoot = createApiBuilderFromCtpClient(client).withProjectKey({
  projectKey,
});
