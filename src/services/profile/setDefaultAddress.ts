import axios from 'axios';
import { getTokenFromLocalStorage } from '../../utils/authUtils';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const region = import.meta.env.VITE_REACT_APP_API_URL;

interface ISetDefaultAddressProps {
  isBillingAddress: boolean;
  addressId: string;
  userId: string;
  versionId: number;
}

const setDefaultAddress = async ({
  userId,
  versionId,
  addressId,
  isBillingAddress,
}: ISetDefaultAddressProps) => {
  try {
    const { token } = getTokenFromLocalStorage();
    const response = await axios.post(
      `${region}/${projectKey}/customers/${userId}`,
      JSON.stringify({
        version: versionId,
        actions: [
          {
            action: isBillingAddress ? 'setDefaultBillingAddress' : 'setDefaultShippingAddress',
            addressId,
          },
        ],
      }),
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default setDefaultAddress;
