import axios from 'axios';
import { ICustomerAddressBase } from '../../types/types';
import { getTokenFromLocalStorage } from '../../utils/authUtils';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const region = import.meta.env.VITE_REACT_APP_API_URL;

export const addAddress = async (
  address: ICustomerAddressBase,
  userId: string,
  versionId: number,
  isBilling: boolean,
) => {
  try {
    const { token } = getTokenFromLocalStorage();
    const newCustomer = await axios.post(
      `${region}/${projectKey}/customers/${userId}`,
      JSON.stringify({
        version: versionId,
        actions: [
          {
            action: 'addAddress',
            address,
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
    if (newCustomer) {
      const response = await axios.post(
        `${region}/${projectKey}/customers/${userId}`,
        JSON.stringify({
          version: newCustomer.data.version,
          actions: [
            {
              action: isBilling
                ? 'addBillingAddressId'
                : 'addShippingAddressId',
              addressId:
                newCustomer.data.addresses[
                  newCustomer.data.addresses.length - 1
                ].id,
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
    }
    return newCustomer;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default addAddress;
