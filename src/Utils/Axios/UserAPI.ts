import axios, { AxiosInstance } from 'axios';
import { URL } from '../../Constants';

interface config {
  withAuthorization?: boolean;
}

type UserAPI = (config?: config) => AxiosInstance;

const userAPI: UserAPI = (config) => {
  // Having authorization as default value
  let headers: { authorization?: string } = {
    authorization: localStorage.getItem('idToken')!,
  };

  // If withAuthorization is false then headers will be empty object
  if (config && Object.keys(config).includes('withAuthorization')) {
    if (!config?.withAuthorization) headers = {};
  }

  if (config?.withAuthorization) {
  }

  return axios.create({
    baseURL: URL.USER_API_URL.toString(),
    headers,
  });
};

export default userAPI;
