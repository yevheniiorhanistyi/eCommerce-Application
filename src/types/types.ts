import { ReactNode } from 'react';

export interface ICustomerBase {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  addressShipping: ICustomerAddressBase;
  addressBilling: ICustomerAddressBase;
  isSetDefaultShippingAddress: boolean;
  isSetDefaultBillingAddress: boolean;
  isTwoAddresses: boolean;
}

export interface ICustomerAddressBase {
  streetName: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface IGetCustomerAddress extends ICustomerAddressBase {
  id: string;
}

export interface IGetCustomerData extends ICustomerBase {
  id: string;
  version: number;
  createdAt: string;
  lastModifiedAt: string;
  lastModifiedBy: {
    clientId: string;
    isPlatformClient: boolean;
  };
  createdBy: {
    clientId: string;
    isPlatformClient: boolean;
  };
  dateOfBirth: string;
  addresses: IGetCustomerAddress[];
  shippingAddressIds: string[];
  billingAddressIds: string[];
  isEmailVerified: boolean;
  stores: string[];
  authenticationMode: string;
  defaultBillingAddressId: string;
  defaultShippingAddressId: string;
}

export interface ICustomerForm extends ICustomerBase {
  dateOfBirth: Date | null;
}

export interface ICustomer extends ICustomerBase {
  dateOfBirth: Date;
}

export interface ICountry {
  codeCountry: string;
  nameCountry: string;
}

export interface IAuthenticateCustomerProps {
  email: string;
  password: string;
}

export interface ITokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

export interface ISignOutButtonProps {
  onSignOutSuccess: () => void;
}

export interface ICenteredDividerProps {
  caption: string;
}

export interface IModalProviderProps {
  children: ReactNode;
}

export interface ISignInFormProps {
  onSignInSuccess: () => void;
}

export interface ISignUpFormProps {
  onSignInSuccess: () => void;
}

export interface ISO3166Alpha2 {
  [key: string]: string;
}

export interface IAnonymousTokenResponse {
  token: string;
  isAuthenticated: boolean;
}

export interface IAuthContextType {
  isAuthenticated: boolean;
  setAuthentication: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IDetailedProductProps {
  keyProduct: string | undefined;
}

export interface IImage {
  url: string;
  dimensions: {
    w: number;
    h: number;
  };
}

export interface IProductDisplayData {
  title: string;
  description: string;
  images: IImage[];
}

export interface IProductImageProps {
  url: string;
  alt: string;
}

export interface IProductSliderProps {
  images: IImage[];
  keyProduct: string;
}
