import { UserLoginValues, UserSignUpValues } from '../../types/User';
import { loginAction, signUpAction } from './Actions';
import { UserService } from '../../Services';

export const loginUser = (loginValues: UserLoginValues) => {
  return async (dispatch: (actions: any) => void): Promise<void> => {
    await UserService.loginUser(loginValues);
    dispatch(
      loginAction({ name: loginValues.email, email: loginValues.email }),
    );
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
