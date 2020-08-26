import { EnvVariableError } from '../index';

describe('EnvVariableError', function () {
  describe('Setting value of variable', function () {
    const variable = 'TEST_VARIABLE';
    const envVariableError = new EnvVariableError(variable);

    it('should have set value of property "variable"', function () {
      expect(envVariableError.variable).toBe(variable);
    });
  });

  describe('Changing default message', function () {
    const message = 'This is test Error';
    const envVariableError = new EnvVariableError('TEST_VARIABLE', message);

    it('should have changed default message', function () {
      expect(envVariableError.message).toBe(message);
    });
  });

  describe('Setting value of variable and changing default message', function () {
    const variable = 'TEST_VARIABLE';
    const message = 'This is test Error';
    const envVariableError = new EnvVariableError(variable, message);

    it('should have set value of property "variable" and changed default message', function () {
      expect(envVariableError.message).toBe(message);
      expect(envVariableError.variable).toBe(variable);
    });
  });
});
