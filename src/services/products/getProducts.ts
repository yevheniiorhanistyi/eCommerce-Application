import axios from 'axios';
import { getTokenFromLocalStorage } from '../../utils/authUtils';
import { IProductResponse } from '../../types/productInterfaces';
import { getAnonymousToken } from '../authenticate/getAnonymousToken';
import { validateTokenStatus } from '../authenticate/validateTokenStatus';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

export const getProducts = async () => {
  try {
    let { token } = getTokenFromLocalStorage();
    if (!token) {
      const anonymousToken = await getAnonymousToken();
      token = anonymousToken.token;
    } else {
      const tokenStatusResponse = await validateTokenStatus(token);
      if (!tokenStatusResponse.active) {
        token = (await getAnonymousToken()).token;
      }
    }
    const response = await axios.get<IProductResponse>(
      `${baseUrl}/${projectKey}/products`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default getProducts;
