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

interface IPriceValue {
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
  createdAt: string;
  masterData: {
    current: {
      categories: ICategory[];
      name: { 'en-US': string };
      description: { 'en-US': string };
      masterVariant: {
        attributes: IAttribute[];
        images: IImage[];
        prices: IPrice[];
      };
    };
  };
}

export interface IProductResponse {
  count: number;
  limit: number;
  offset: number;
  total: number;
  results: IProduct[];
}
