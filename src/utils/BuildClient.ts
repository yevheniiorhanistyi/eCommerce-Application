import {
  ClientBuilder,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions,
} from '@commercetools/sdk-client-v2';

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey: 'e_com_app',
  credentials: {
    clientId: 'D3lR6BXLU6X0rcVWrxBJEOYM',
    clientSecret: '21Cn9eG8h2ggQgrE18eXLzW5qj9C3X9R',
  },
  scopes: [
    'view_shopping_lists:e_com_app view_connectors:e_com_app view_import_containers:e_com_app',
    'view_cart_discounts:e_com_app',
    'view_published_products:e_com_app',
    'manage_my_profile:e_com_app',
    'view_payments:e_com_app',
    'view_product_selections:e_com_app',
    'view_discount_codes:e_com_app',
    'view_customer_groups:e_com_app',
    'manage_order_edits:e_com_app',
    'view_categories:e_com_app',
    'view_connectors_deployments:e_com_app',
    'view_messages:e_com_app',
    'manage_api_clients:e_com_app',
    'manage_customers:e_com_app',
    'manage_orders:e_com_app',
    'manage_my_orders:e_com_app',
    'view_shipping_methods:e_com_app',
    'view_standalone_prices:e_com_app',
  ],
  fetch,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: 'https://api.europe-west1.gcp.commercetools.com',
  fetch,
};

// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();

export default ctpClient;
