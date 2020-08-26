import axios, { AxiosInstance } from 'axios';
import { URL } from '../../Constants';

interface config {
  withAuthorization: boolean;
}

type UserAPI = ({ withAuthorization }: config) => AxiosInstance;

const userAPI: UserAPI = ({ withAuthorization = true }) => {
  let headers = {};

  if (withAuthorization) {
    headers = {
      authorization: 'Bearer ' + localStorage.getItem('idToken'),
    };
  }

  return axios.create({
    baseURL: URL.USER_API_URL.toString(),
    headers,
  });
};

export default userAPI;
