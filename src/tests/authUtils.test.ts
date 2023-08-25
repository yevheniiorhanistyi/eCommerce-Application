import {
  setTokenToLocalStorage,
  getTokenFromLocalStorage,
  removeTokenFromLocalStorage,
} from '../utils/authUtils';

describe('localStorageUtils', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('setTokenToLocalStorage stores token in localStorage', () => {
    const token = 'testToken';
    setTokenToLocalStorage(token);

    expect(localStorage.getItem('accessToken')).toBe(token);
  });

  test('getTokenFromLocalStorage retrieves token from localStorage', () => {
    const token = 'testToken';
    localStorage.setItem('accessToken', token);

    const retrievedToken = getTokenFromLocalStorage();

    expect(retrievedToken).toBe(token);
  });

  test('getTokenFromLocalStorage returns null if token is not in localStorage', () => {
    const retrievedToken = getTokenFromLocalStorage();

    expect(retrievedToken).toBeNull();
  });

  test('removeTokenFromLocalStorage removes token from localStorage', () => {
    const token = 'testToken';
    localStorage.setItem('accessToken', token);

    removeTokenFromLocalStorage();

    expect(localStorage.getItem('accessToken')).toBeNull();
  });
});
