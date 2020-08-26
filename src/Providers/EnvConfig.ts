import { EnvVariableError } from '../Errors';

export default class EnvConfig {
  public static getEnvironment = (): string => {
    const ENVIRONMENT = process.env.NODE_ENV;

    if (ENVIRONMENT) return ENVIRONMENT;

    throw new EnvVariableError('NODE_ENV');
  };

  public static getCartApiUrl = (): string => {
    const URL = process.env.CART_API_URL;

    if (URL) return URL;

    throw new EnvVariableError('CART_API_URL');
  };

  public static getUserApiUrl = (): string => {
    const URL = process.env.USER_API_URL;

    if (URL) return URL;

    throw new EnvVariableError('USER_API_URL');
  };
}
