import passwordValidation from '../validation/password.validation';

describe('passwordValidation', () => {
  it('returns an error for a short password', () => {
    const testValue = 'Abc12';

    expect(() => passwordValidation.validateSync(testValue)).toThrow(
      'Password should be of minimum 8 characters length',
    );
  });

  it('returns an error if the password does not contain an uppercase letter', () => {
    const testValue = 'abc12345';

    expect(() => passwordValidation.validateSync(testValue)).toThrow(
      'Password must include at least one uppercase letter (A-Z)',
    );
  });

  it('returns an error if the password does not contain a lowercase letter', () => {
    const testValue = 'ABC12345';

    expect(() => passwordValidation.validateSync(testValue)).toThrow(
      'Password must include at least one lowercase letter (a-z)',
    );
  });

  it('returns an error if the password does not contain a digit', () => {
    const testValue = 'Abcdefgh';

    expect(() => passwordValidation.validateSync(testValue)).toThrow(
      'Password must include at least one digit (0-9)',
    );
  });

  it('returns an error if the password does not contain a special character', () => {
    const testValue = 'Abc123456';

    expect(() => passwordValidation.validateSync(testValue)).toThrow(
      'Password must include at least one special character (!@#$%^&*)',
    );
  });

  it('returns an error if the password is missing', () => {
    expect(() => passwordValidation.validateSync(null)).toThrow(
      'Password is required',
    );
  });

  it('passes validation for a correct password', () => {
    const testValue = 'Abc12345!';

    expect(() => passwordValidation.validateSync(testValue)).not.toThrow();
  });
});
