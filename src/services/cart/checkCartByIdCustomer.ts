import axios from 'axios';
import getActiveToken from '../authenticate/getActiveToken';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

const checkCartByIdCustomer = async (idCustomer: string) => {
  const { token } = await getActiveToken();
  try {
    const response = await axios.get(`${baseUrl}/${projectKey}/carts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        customerId: idCustomer,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default checkCartByIdCustomer;
