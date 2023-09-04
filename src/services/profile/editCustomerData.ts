import axios from 'axios';
import {
  getTokenFromLocalStorage,
} from '../../utils/authUtils';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const region = import.meta.env.VITE_REACT_APP_API_URL;
const id = '50777a13-e6df-487b-b682-76c8297bdbdb';
const version = 7;

export interface IEditCustomerDataProps {
  firstName: string;
  lastName: string;
  dateOfBirth: any;
  email: string;
}

const editCustomerData = async ({
  firstName,
  lastName,
  dateOfBirth,
  email,
}: IEditCustomerDataProps) => {
  try {
    const { token } = getTokenFromLocalStorage();
    const response = await axios.post(
      `${region}/${projectKey}/customers/${id}`,
      JSON.stringify({
        version,
        actions: [
          {
            action: 'setFirstName',
            firstName,
          },
          {
            action: 'setLasttName',
            LasttName: lastName,
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
    throw error;
  }
};

export default editCustomerData;
