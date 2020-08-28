import { EnvVariableError } from '../Errors';

// Provides Environment variables
export default class EnvConfig {
  public static getEnvironment = (): string => {
    const ENVIRONMENT = process.env.REACT_APP_NODE_ENV;

    if (ENVIRONMENT) return ENVIRONMENT;

    throw new EnvVariableError('NODE_ENV');
  };

  public static getCartApiUrl = (): string => {
    const URL = process.env.REACT_APP_CART_API_URL;

    if (URL) return URL;

    throw new EnvVariableError('CART_API_URL');
  };

  public static getUserApiUrl = (): string => {
    const URL = process.env.REACT_APP_USER_API_URL;

    if (URL) return URL;

    throw new EnvVariableError('USER_API_URL');
  };

  public static getAuthenticationApiUrl = (): string => {
    const URL = process.env.REACT_APP_AUTHENTICATION_API_URL;

    if (URL) return URL;

    throw new EnvVariableError('AUTHENTICATION_API_URL');
  };
}
