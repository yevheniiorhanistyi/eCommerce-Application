import axios from 'axios';
import getActiveToken from '../authenticate/getActiveToken';
import combineStringAndValues from '../../utils/combineStringAndValues';
import { IProductResponse } from '../../types/productInterfaces';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

export const getProductByParams = async (
  offset: number,
  sortValue: string,
  colors: string[],
  sizes: string[],
  brands: string[],
  searchValue: string,
  categoryId: string | null = null,
  minPrice = 10,
  maxPrice = 120,
) => {
  try {
    const { token } = await getActiveToken();

    const filters = [
      { key: 'variants.attributes.color.key', values: colors },
      { key: 'variants.attributes.size.key', values: sizes },
      { key: 'variants.attributes.brand.key', values: brands },
    ];
    const queryParams: {
      filter: string[];
      sort: string[];
      'text.en-US': string;
      limit: number;
      offset: number;
    } = {
      filter: [
        `variants.price.centAmount:range("${minPrice * 100}" to "${
          maxPrice * 100
        }")`,
      ],
      sort: [sortValue],
      'text.en-US': `${searchValue}`,
      limit: 6,
      offset,
    };
    if (categoryId) queryParams.filter.push(`categories.id:"${categoryId}"`);
    filters.forEach((filter) => {
      if (filter.values.length > 0) {
        queryParams.filter.push(
          combineStringAndValues(filter.key, filter.values),
        );
      }
    });
    const response = await axios.get<IProductResponse>(
      `${baseUrl}/${projectKey}/product-projections/search`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: queryParams,
      },
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getProductByParams;
