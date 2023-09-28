import { ISearchParams } from '../types/types';

export const CATALOG_PAGE_WINDOW_BREAKPOINT = 940;
export const FEATURED_CLOTHING_CATEGORY_ID = 'd4076a3b-423c-4758-9965-5d47ce0835c6';

export const sortingOptions = [
  { label: 'Name: A - Z', value: 'name.en-us asc' },
  { label: 'Name: Z - A', value: 'name.en-us desc' },
  { label: 'Price: Low - High', value: 'price asc' },
  { label: 'Price: High - Low', value: 'price desc' },
];

export const clothingCategories = [
  { label: "Men's", id: '10f454b6-db13-46d0-a905-828224ab7231' },
  { label: "Women's", id: '90a47f27-61f2-4ad6-8bd7-75fc9bca4f19' },
  { label: 'Boys', id: 'e8ee2706-5eb4-4bd0-9a13-44332541f6bd' },
];
export const clothingSizes = [
  { label: 'XS', value: 'XS' },
  { label: 'S', value: 'S' },
  { label: 'M', value: 'M' },
  { label: 'L', value: 'L' },
  { label: 'XL', value: 'XL' },
  { label: 'XXL', value: 'XXL' },
];
export const brands = [
  { label: 'Athleta', value: 'Athleta' },
  { label: 'Dalbello', value: 'Dalbello' },
  { label: 'Outdoor', value: 'Outdoor' },
  { label: 'REI Co-op', value: 'REI Co-op' },
  { label: 'Patagonia', value: 'Patagonia' },
  { label: 'KUHL', value: 'KUHL' },
];
export const colors = [
  { label: 'Black', value: 'Black' },
  { label: 'Red', value: 'Red' },
  { label: 'Blue', value: 'Blue' },
  { label: 'Green', value: 'Green' },
  { label: 'Pink', value: 'Pink' },
  { label: 'Orange', value: 'Orange' },
  { label: 'Gray', value: 'Gray' },
];

export const initialSearchParams: ISearchParams = {
  offset: 0,
  term: '',
  sortValue: 'price asc',
  colors: [],
  sizes: [],
  brands: [],
  prices: [10, 800],
};
