import { Cart } from '@commercetools/platform-sdk';
import { ReactNode } from 'react';

export interface IProfileButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface IAuthButtonProps {
  text: string;
  icon?: React.ReactNode | null;
}

export interface IUserData {
  firstName: string;
  lastName: string;
  email: string;
}

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
  id?: string;
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
  addresses: ICustomerAddressBase[];
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

type CategoryItem = {
  label: string;
  value: string;
};

type SearchParamsArrayTypes = {
  colors: string;
  sizes: string;
  brands: string;
};

export interface ICategoryAccordionProps extends ICommonProps {
  isOpen: boolean;
  label: string;
  labelList: CategoryItem[];
  propertyToChange: keyof SearchParamsArrayTypes;
}

export interface ISearchParams {
  offset: number;
  term: string;
  sortValue: string;
  colors: string[];
  sizes: string[];
  brands: string[];
  prices: [number, number];
}

export interface ICommonProps {
  searchParams: ISearchParams;
  setSearchParams: React.Dispatch<React.SetStateAction<ISearchParams>>;
}

export interface IAppPaginationProps extends ICommonProps {
  totalElements: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export interface ICategoryPopoverProps {
  anchorEl: HTMLElement | null;
  setAnchorElem: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  children: ReactNode;
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
  productId: string;
  variantId: number;
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
  addresses: ICustomerAddressBase[];
  defaultAddressId: string | undefined;
  userId: string;
  versionId: number;
  deleteSuccess: () => void;
  editSuccess: () => void;
  customer: IGetCustomerData;
  setAsDefault: (addressId: string, isBillingAddress: boolean) => void;
  isBillingAddress: boolean;
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
  children?: string;
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

export interface ICartContextType {
  badgeContent: number;
  updateBadgeContent: (value: number) => void;
}

export interface ICartProviderProps {
  children: ReactNode;
}

export interface IProtectedComponentProps {
  isLoggedIn: boolean;
  children: React.ReactNode;
}

export type TLanguage = 'en-US';

export type LocalizedObject<T> = {
  [key in TLanguage]: T;
};

export interface INonEmptyCardAProps {
  cartData: Cart;
  deleteSuccess: () => void;
}

export interface ITeamMember {
  name: string;
  role: string;
  bio: string[];
  github: string;
  photo: string;
  linkedin?: string;
}
