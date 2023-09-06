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

export interface IEditDataSuccess {
  onEditDataSuccess: () => void;
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

export interface ITokenStatusResponse {
  active: boolean;
}

export interface ISortingSelect {
  selectedOption: string;
}

type CategoryItem = {
  label: string;
  value: string;
};

export type CategoryAccordionProps = {
  isOpen: boolean;
  label: string;
  selectedValues: string[];
  setSelectedValues: React.Dispatch<React.SetStateAction<string[]>>;
  labelList: CategoryItem[];
};

interface IGender {
  label: string;
  id: string;
}

export interface IGenderCategoryProps {
  isOpen: boolean;
  genderList: IGender[];
  selectedGender: string;
  setSelectedGender: React.Dispatch<React.SetStateAction<string>>;
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
  price: string;
  discountPrice?: string;
}

export interface IProductImageProps {
  url: string;
  alt: string;
  isButtondDisabled?: boolean;
  index?: number;
  images?: IImage[];
}

export interface IProductSliderProps {
  images: IImage[];
  title: string;
  isButtondDisabled?: boolean;
  startIndex?: number;
}

export interface ICustomerAddressProps {
  addresses: IGetCustomerAddress[];
  defaultAddressId: string | undefined;
  userId: string;
  versionId: number;
  deleteSuccess: () => void;
}

export interface ICustomerDataField {
  title: string | undefined;
  description: string | undefined;
}

export interface ICustomerDataProps {
  logoIcon: ReactNode;
  fields: ICustomerDataField[];
  deleteIcon?: ReactNode;
  customer: IGetCustomerData;
  addSuccess: () => void;
}

export interface IEditDataForm {
  firstName: string;
  lastName: string;
  dateOfBirth: string | null;
}

export interface IEditIconButtonProps {
  callback: () => void;
}

export interface IAddIconButtonProps {
  userId: string;
  isBilling: boolean;
  versionId: number;
  addSuccess: () => void;
}

export interface IDeleteIconButtonProps {
  userId: string;
  addressId: string;
  versionId: number;
  deleteSuccess: () => void;
}

export type PriceRangeProps = {
  prices: number[];
  setPrices: React.Dispatch<React.SetStateAction<number[]>>;
};

export type FilterSidebarProps = {
  selectedColors: string[];
  selectedSizes: string[];
  prices: number[];
  selectedBrands: string[];
  setSelectedBrands: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedSizes: React.Dispatch<React.SetStateAction<string[]>>;
  setSelectedColors: React.Dispatch<React.SetStateAction<string[]>>;
  setPrices: React.Dispatch<React.SetStateAction<number[]>>;
};

export interface IProtectedComponentProps {
  isLoggedIn: boolean;
  children: React.ReactNode;
}

export type TLanguage = 'en-US';

export type LocalizedObject<T> = {
  [key in TLanguage]: T;
};
