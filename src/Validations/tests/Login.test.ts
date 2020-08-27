import { loginValidation } from '../index';
import { UserLoginValues } from '../../types/User';

/*
 * TOTAL POSSIBLE ERRORS ON NO INPUT
 *      [
 *          'name must have at least 3 characters',
 *          'name is Required',
 *          'Password must have at least 5 characters',
 *          'Password is Required'
 *      ]
 */

describe('Every Field is empty', function () {
  it('should throw 6 errors', async function () {
    try {
      await loginValidation.validate(
        {
          name: '',
          password: '',
        } as UserLoginValues,
        { abortEarly: false },
      );
    } catch (error) {
      expect(error.errors.length).toBe(4);
    }
  });
});

describe('Every Field is filled', function () {
  it('should not throw any error', async function () {
    const inputValues = {
      name: 'Aryansh',
      password: 'Password',
    } as UserLoginValues;

    const values = await loginValidation.validate(inputValues, {
      abortEarly: false,
    });

    expect(values).toEqual(inputValues);
  });
});
