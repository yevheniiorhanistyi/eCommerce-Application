import { ReactNode } from 'react';

export interface IAddress {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}
export interface ICustomerBase {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  addressShipping: IAddress;
  addressBilling: IAddress;
  isSetDefaultShippingAddress: boolean;
  isSetDefaultBillingAddress: boolean;
  isTwoAddresses: boolean;
}

export interface ICustomerForm extends ICustomerBase {
  birthDate: Date | null;
}

export interface ICustomer extends ICustomerBase {
  birthDate: Date;
}

export interface ICountrie {
  codeCountrie: string;
  nameCountrie: string;
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

export interface IAuthContextType {
  isSignedIn: boolean;
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
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
