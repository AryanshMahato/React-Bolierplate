import { EnvConfig } from '../Providers';

export default {
  CART_API_URL: EnvConfig.getCartApiUrl(),
  USER_API_URL: EnvConfig.getUserApiUrl(),
  AUTHENTICATION_API_URL: EnvConfig.getAuthenticationApiUrl(),
};
