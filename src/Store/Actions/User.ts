import { UserLoginValues, UserSignUpValues } from '../../types/User';
import { loginAction, signUpAction } from './Actions';
import { UserService } from '../../Services';

export const loginUser = (loginValues: UserLoginValues) => {
  return (dispatch: (actions: any) => void): void => {
    dispatch(loginAction({ name: 'Aryansh', email: 'aryansh@gmail.com' }));
  };
};

export const signUpUser = (signUpValues: UserSignUpValues) => {
  return async (dispatch: (actions: any) => void): Promise<void> => {
    try {
      const user = await UserService.signUpUser(signUpValues);
      if (user) dispatch(signUpAction({ name: user.name, email: user.email }));
    } catch (e) {
      // TODO: Add SignUp Failed Handler
    }
  };
};
