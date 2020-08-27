import { signUpValidation } from '../index';
import { UserSignUpValues } from '../../types/User';

/*
 * TOTAL POSSIBLE ERRORS ON NO INPUT
 *      [
 *          'Username must have at least 3 characters',
 *          'Username is Required',
 *          'Email is Required',
 *          'Password must have at least 5 characters',
 *          'Password is Required',
 *          'Password must have at least 5 characters'
 *      ]
 */

describe('Every Field is empty', function () {
  it('should throw 6 errors', async function () {
    try {
      await signUpValidation.validate(
        {
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
        } as UserSignUpValues,
        { abortEarly: false },
      );
    } catch (error) {
      expect(error.errors.length).toBe(6);
    }
  });
});

describe('Every Field is filled with same password', function () {
  it('should not throw any error', async function () {
    const inputValues = {
      username: 'Aryansh',
      email: 'aryansh@gmail.com',
      password: 'Password',
      confirmPassword: 'Password',
    } as UserSignUpValues;

    const values = await signUpValidation.validate(inputValues, {
      abortEarly: false,
    });

    expect(values).toEqual(inputValues);
  });
});

describe('Every Field is filled with different password', function () {
  it('should not throw different password error', async function () {
    const inputValues = {
      username: 'Aryansh',
      email: 'aryansh@gmail.com',
      password: 'Password',
      confirmPassword: 'DifferentPassword',
    } as UserSignUpValues;

    try {
      await signUpValidation.validate(inputValues, {
        abortEarly: false,
      });
    } catch (error) {
      // Must be 1 error only
      expect(error.errors.length).toBe(1);

      // Password must match error
      expect(error.message).toBe('Passwords must match');
    }
  });
});
