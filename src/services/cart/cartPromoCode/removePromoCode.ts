import axios, { AxiosError } from 'axios';
import { Cart } from '@commercetools/platform-sdk';
import getActiveToken from '../../authenticate/getActiveToken';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

const removePromoCode = async (
  cartId: string,
  cartVersion: number,
  id: string,
): Promise<Cart | null> => {
  const { token } = await getActiveToken();
  return axios
    .post(
      `${baseUrl}/${projectKey}/carts/${cartId}`,
      JSON.stringify({
        version: cartVersion,
        actions: [
          {
            action: 'removeDiscountCode',
            discountCode: {
              typeId: 'discount-code',
              id,
            },
          },
        ],
      }),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    )
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((error: Error | AxiosError) => {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.data.message);
      }
    });
};

export default removePromoCode;
