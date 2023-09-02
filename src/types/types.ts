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

export interface ITokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}

export interface IAnonymousTokenResponse {
  token: string;
  isAuthenticated: boolean;
}

export interface ITokenStatusResponse {
  active: boolean;
}

export interface ISortingSelect {
  selectedOption: string;
}

export type CategoryAccordionProps = {
  isOpen: boolean;
  label: string;
  labelList: string[];
};
