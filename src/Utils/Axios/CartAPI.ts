import axios, { AxiosInstance } from 'axios';
import { URL } from '../../Constants';

interface config {
  withAuthorization: boolean;
}

type CartAPI = ({ withAuthorization }: config) => AxiosInstance;

const cartAPI: CartAPI = ({ withAuthorization = true }) => {
  let headers = {};

  if (withAuthorization) {
    headers = {
      authorization: 'Bearer ' + localStorage.getItem('idToken'),
    };
  }

  return axios.create({
    baseURL: URL.CART_API_URL.toString(),
    headers,
  });
};

export default cartAPI;
