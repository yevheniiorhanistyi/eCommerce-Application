import {
  setTokenToLocalStorage,
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
} from '../utils/authUtils';

describe('localStorageUtils', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('setTokenToLocalStorage stores token and authentication status in localStorage', () => {
    const token = 'testToken';
    const isAuthenticated = true;
    setTokenToLocalStorage(token, isAuthenticated);

    expect(localStorage.getItem('accessToken')).toBe(token);
    expect(localStorage.getItem('isAuthenticated')).toBe(
      isAuthenticated.toString(),
    );
  });

  test('getTokenFromLocalStorage retrieves token and authentication status from localStorage', () => {
    const token = 'testToken';
    const isAuthenticated = true;
    localStorage.setItem('accessToken', token);
    localStorage.setItem('isAuthenticated', isAuthenticated.toString());

    const { token: retrievedToken, isAuthenticated: retrievedAuth } = getTokenFromLocalStorage();

    expect(retrievedToken).toBe(token);
    expect(retrievedAuth).toBe(isAuthenticated);
  });

  test('getTokenFromLocalStorage returns null token and false authentication status if token is not in localStorage', () => {
    const { token: retrievedToken, isAuthenticated: retrievedAuth } = getTokenFromLocalStorage();

    expect(retrievedToken).toBeNull();
    expect(retrievedAuth).toBe(false);
  });

  test('removeTokenFromLocalStorage removes token and authentication status from localStorage', () => {
    const token = 'testToken';
    const isAuthenticated = true;
    localStorage.setItem('accessToken', token);
    localStorage.setItem('isAuthenticated', isAuthenticated.toString());

    removeTokenFromLocalStorage();

    expect(localStorage.getItem('accessToken')).toBeNull();
    expect(localStorage.getItem('isAuthenticated')).toBeNull();
  });
});
