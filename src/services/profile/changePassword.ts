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
    if (
      error
      && typeof error === 'object'
      && 'request' in error
      && error.request
      && typeof error.request === 'object'
      && 'responseText' in error.request
      && error.request.responseText
      && typeof error.request.responseText === 'string'
    ) {
      const responseText = JSON.parse(error.request.responseText);
      const { statusCode } = responseText;
      const { message } = responseText;

      if (statusCode === 400) {
        if (typeof message === 'string') return message;
        return 'The server returned an unknown error';
      }
    }
    return null;
  }
};

export default changePassword;
