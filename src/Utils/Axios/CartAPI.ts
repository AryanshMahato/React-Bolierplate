import axios, { AxiosInstance } from 'axios';
import { URL } from '../../Constants';

interface config {
  withAuthorization?: boolean;
}

type CartAPI = (config?: config) => AxiosInstance;

const cartAPI: CartAPI = (config) => {
  // Having authorization as default value
  let headers: { authorization?: string } = {
    authorization: 'Bearer ' + localStorage.getItem('idToken'),
  };

  // If withAuthorization is false then headers will be empty object
  if (config && Object.keys(config).includes('withAuthorization')) {
    if (!config?.withAuthorization) headers = {};
  }

  if (config?.withAuthorization) {
  }

  return axios.create({
    baseURL: URL.CART_API_URL.toString(),
    headers,
  });
};

export default cartAPI;
