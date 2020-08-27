import { userAPI } from '../Utils';
import { ApiCallFunc } from '../types/API';
import { User, UserLoginValues, UserSignUpValues } from '../types/User';
import { ApiValidation } from '../Errors/ApiValidation';
import { AlreadyExists } from '../Errors/AlreadyExists';
import { NotFound } from '../Errors/NotFound';
import { WrongCredentials } from '../Errors/WrongCredentials';

export default class UserService {
  public static signUpUser: ApiCallFunc<UserSignUpValues, User> = async (
    values,
  ) => {
    try {
      const response = await userAPI({
        withAuthorization: false,
      }).post('/user/register', values);

      // Request Successful
      if (response.status === 201) return response.data;
    } catch (e) {
      if (e.status === 400)
        throw new ApiValidation(e.response.data.error, e.response.data.message);

      if (e.response.status === 409)
        throw new AlreadyExists('Email already exists');
    }
  };

  public static loginUser: ApiCallFunc<UserLoginValues, User> = async (
    values,
  ) => {
    try {
      const response = await userAPI({
        withAuthorization: false,
      }).post('/user/login', values);

      // Request Successful
      if (response.status === 200) {
        localStorage.setItem('idToken', response.data.token.access_token);
        return response.data;
      }
    } catch (e) {
      if (e.status === 400)
        throw new ApiValidation(e.response.data.error, e.response.data.message);

      if (e.response.status === 404) throw new NotFound('User not found!');

      if (e.response.status === 403)
        throw new WrongCredentials('Email or Password did not matched');
    }
  };
}
