import {
  ClientBuilder,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions,
  type PasswordAuthMiddlewareOptions,
} from '@commercetools/sdk-client-v2';

import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';

interface AuthenticateClientProps {
  email: string;
  password: string;
}

export const authenticateClient = ({
  email,
  password,
}: AuthenticateClientProps) => {
  const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
  const scopes = [import.meta.env.VITE_REACT_APP_SCOPES];

  const authMiddlewareOptions: AuthMiddlewareOptions = {
    host: import.meta.env.VITE_REACT_APP_AUTH_URL,
    projectKey,
    credentials: {
      clientId: import.meta.env.VITE_REACT_APP_CLIENT_ID,
      clientSecret: import.meta.env.VITE_REACT_APP_CLIENT_SECRET,
    },
    scopes,
    fetch,
  };

  const httpMiddlewareOptions: HttpMiddlewareOptions = {
    host: import.meta.env.VITE_REACT_APP_API_URL,
    fetch,
  };
  const options: PasswordAuthMiddlewareOptions = {
    host: 'https://auth.europe-west1.gcp.commercetools.com',
    projectKey: 'test-project-key',
    credentials: {
      clientId: import.meta.env.VITE_REACT_APP_CLIENT_ID,
      clientSecret: import.meta.env.VITE_REACT_APP_CLIENT_SECRET,
      user: {
        username: email,
        password,
      },
    },
    scopes,
    fetch,
  };

  const client = new ClientBuilder()
    .withPasswordFlow(options)
    .withProjectKey(projectKey)
    .withClientCredentialsFlow(authMiddlewareOptions)
    .withHttpMiddleware(httpMiddlewareOptions)
    .withLoggerMiddleware()
    .build();

  const apiRoot = createApiBuilderFromCtpClient(client).withProjectKey({
    projectKey,
  });

  return apiRoot.me().login().post({ body: { email, password } }).execute();
};

export default authenticateClient;
