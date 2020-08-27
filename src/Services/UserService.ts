import { userAPI } from '../Utils';
import { ApiCallFunc } from '../types/API';
import { User, UserSignUpValues } from '../types/User';
import { ApiValidation } from '../Errors/ApiValidation';

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
    }
  };
}
