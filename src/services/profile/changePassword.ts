import axios from 'axios';
import { getTokenFromLocalStorage } from '../../utils/authUtils';

const projectKey = import.meta.env.VITE_REACT_APP_PROJECT_KEY;
const region = import.meta.env.VITE_REACT_APP_API_URL;

export interface IChangePasswordProps {
  userId: string;
  versionId: number;
  currentPassword: string;
  newPassword: string;
}

const changePassword = async ({
  userId,
  versionId,
  currentPassword,
  newPassword,
}: IChangePasswordProps) => {
  try {
    const { token } = getTokenFromLocalStorage();
    const response = await axios.post(
      `${region}/${projectKey}/customers/password`,
      JSON.stringify({
        id: userId,
        version: versionId,
        currentPassword,
        newPassword,
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

export default changePassword;
