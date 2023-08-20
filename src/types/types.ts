export interface IAddress {
  street: string;
  city: string;
  postalCode: string;
  country: string;
  isSetDefaultShippingAddress: boolean;
  isSetDefaultBillingAddress: boolean;
}
export interface ICustomerBase {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  address: IAddress;
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
