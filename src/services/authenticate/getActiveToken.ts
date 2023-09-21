import { validateTokenStatus } from './validateTokenStatus';
import { getAnonymousToken } from './getAnonymousToken';
import {
  getTokenFromLocalStorage,
  setTokenToLocalStorage,
} from '../../utils/authUtils';

const getActiveToken = async () => {
  const { token, isAuthenticated } = getTokenFromLocalStorage();

  if (!token || !(await validateTokenStatus(token)).active) {
    const anonymousToken = await getAnonymousToken();
    setTokenToLocalStorage(anonymousToken.token, false);
    return { token: anonymousToken.token, isAuthenticated: false };
  }

  return { token, isAuthenticated };
};

export default getActiveToken;
