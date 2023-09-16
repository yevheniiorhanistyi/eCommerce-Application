import { IUserData } from '../types/types';

export const setUserData = (userData: IUserData): void => {
  localStorage.setItem('userData', JSON.stringify(userData));
};

export const getUserData = (): IUserData => {
  const userDataJSON = localStorage.getItem('userData');
  if (userDataJSON) {
    return JSON.parse(userDataJSON) as IUserData;
  }
  return {
    firstName: '',
    lastName: '',
    email: '',
  };
};

export const removeUserData = (): void => {
  localStorage.removeItem('userData');
};
