import SignInSchema from '../components/SignInForm/SignInSchema';

describe('SignInSchema', () => {
  it('should validate a valid email and password', async () => {
    const validData = {
      email: 'user@example.com',
      password: 'Password123!',
    };

    await expect(SignInSchema.validate(validData)).resolves.toBe(validData);
  });

  it('should fail validation for missing email', async () => {
    const invalidData = {
      password: 'Password123!',
    };

    await expect(SignInSchema.validate(invalidData)).rejects.toThrow(
      'Email is required',
    );
  });
});
