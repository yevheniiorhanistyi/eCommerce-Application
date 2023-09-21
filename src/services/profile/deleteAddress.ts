import axios from 'axios';
import { getTokenFromLocalStorage } from '../../utils/authUtils';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const region = import.meta.env.VITE_REACT_APP_API_URL;

const deleteAddress = async (
  addressId: string,
  userId: string,
  versionId: number,
) => {
  try {
    const { token } = getTokenFromLocalStorage();
    const response = await axios.post(
      `${region}/${projectKey}/customers/${userId}`,
      JSON.stringify({
        version: versionId,
        actions: [
          {
            action: 'removeAddress',
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
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default deleteAddress;
