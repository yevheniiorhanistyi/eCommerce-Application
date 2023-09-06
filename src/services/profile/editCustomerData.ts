import axios from 'axios';
import { getTokenFromLocalStorage } from '../../utils/authUtils';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const region = import.meta.env.VITE_REACT_APP_API_URL;

export interface IEditCustomerDataProps {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  versionId: number;
  userId: string;
}

const editCustomerData = async ({
  firstName,
  lastName,
  dateOfBirth,
  email,
  versionId,
  userId,
}: IEditCustomerDataProps) => {
  try {
    const token = getTokenFromLocalStorage();
    const response = await axios.post(
      `${region}/${projectKey}/customers/${userId}`,
      JSON.stringify({
        version: versionId,
        actions: [
          {
            action: 'setFirstName',
            firstName,
          },
          {
            action: 'setLastName',
            LastName: lastName,
          },
          {
            action: 'setDateOfBirth',
            dateOfBirth,
          },
          {
            action: 'changeEmail',
            email,
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

export default editCustomerData;
