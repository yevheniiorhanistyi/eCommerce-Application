export interface ICustomer {
  email: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  birthDate: Date | null;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  isSetDefaultShippingAddress: boolean;
  isSetDefaultBillinAddress: boolean;
}
