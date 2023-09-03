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
    const colorFilter = combineStringAndValues(
      'variants.attributes.color.key',
      colors,
    );
    const sizeFilter = combineStringAndValues(
      'variants.attributes.size.key',
      sizes,
    );
    const brandFilter = combineStringAndValues(
      'variants.attributes.brand.key',
      brands,
    );
    const queryParams: { filter: string[]; sort: string[] } = {
      filter: [
        `variants.price.centAmount:range("${minPrice * 100}" to "${
          maxPrice * 100
        }")`,
      ],
      sort: [sortValue],
    };
    if (categoryId !== '') queryParams.filter.push(`categories.id:"${categoryId}"`);
    if (colors.length > 0) queryParams.filter.push(colorFilter);
    if (sizes.length > 0) queryParams.filter.push(sizeFilter);
    if (brands.length > 0) queryParams.filter.push(brandFilter);
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
