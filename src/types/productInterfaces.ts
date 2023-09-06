interface ICategory {
  id: string;
  typeId: string;
}

interface IAttribute {
  name: string;
  value: {
    key: string;
    label: string;
  };
}

interface IImage {
  dimensions: {
    h: number;
    w: number;
  };
  url: string;
}

export interface IPriceValue {
  centAmount: number;
  currencyCode: string;
  fractionDigits: number;
  type: string;
}

export interface IPrice {
  id: string;
  discounted: {
    discount: { id: string; typeId: string };
    value: IPriceValue;
  };
  value: IPriceValue;
}

export interface IProduct {
  id: string;
  key: string;
  description: { 'en-US': string };
  name: { 'en-US': string };
  categories: ICategory[];
  masterVariant: {
    attributes: IAttribute[];
    images: IImage[];
    prices: IPrice[];
  };
}

export interface IProductResponse {
  count: number;
  limit: number;
  offset: number;
  total: number;
  results: IProduct[];
}

export type ProductItemProps = {
  keyProduct: string;
  title: string;
  description: string;
  url: string;
  prices: IPrice;
};

export type ProductListProps = {
  isLoading: boolean;
  products: IProduct[];
};
