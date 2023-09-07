import axios from 'axios';
import getActiveToken from '../authenticate/getActiveToken';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const region = import.meta.env.VITE_REACT_APP_API_URL;

interface IEditAddressProps {
  country: string;
  city: string;
  streetName: string;
  postalCode: string;
  addressId: number | undefined;
  userId: string | undefined;
  versionId: number | undefined;
}

const editAddress = async ({
  userId,
  versionId,
  country,
  city,
  streetName,
  postalCode,
  addressId,
}: IEditAddressProps) => {
  try {
    const { token } = await getActiveToken();
    const response = await axios.post(
      `${region}/${projectKey}/customers/${userId}`,
      JSON.stringify({
        version: versionId,
        action: 'changeAddress',
        addressId,
        address: {
          streetName,
          city,
          postalCode,
          country,
        },
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

export default editAddress;
