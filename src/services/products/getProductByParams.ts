import axios from 'axios';
import { getTokenFromLocalStorage } from '../../utils/authUtils';
import { IProductResponse } from '../../types/productInterfaces';
import { getAnonymousToken } from '../authenticate/getAnonymousToken';
import { validateTokenStatus } from '../authenticate/validateTokenStatus';
import combineStringAndValues from '../../utils/combineStringAndValues';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

export const getProductByParams = async (
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
    let { token } = getTokenFromLocalStorage();
    if (!token) {
      const anonymousToken = await getAnonymousToken();
      token = anonymousToken.token;
    } else {
      const tokenStatusResponse = await validateTokenStatus(token);
      if (!tokenStatusResponse.active) token = (await getAnonymousToken()).token;
    }

    const filters = [
      { key: 'variants.attributes.color.key', values: colors },
      { key: 'variants.attributes.size.key', values: sizes },
      { key: 'variants.attributes.brand.key', values: brands },
    ];
    const queryParams: {
      filter: string[];
      sort: string[];
      'text.en-US': string;
    } = {
      filter: [
        `variants.price.centAmount:range("${minPrice * 100}" to "${
          maxPrice * 100
        }")`,
      ],
      sort: [sortValue],
      'text.en-US': `${searchValue}`,
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
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getProductByParams;
