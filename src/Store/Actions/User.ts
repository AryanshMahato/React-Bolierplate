import { UserLoginValues, UserSignUpValues } from '../../types/User';
import { loginAction, setUserErrorAction, signUpAction } from './Actions';
import { UserService } from '../../Services';
import { AlreadyExists } from '../../Errors/AlreadyExists';

export const loginUser = (loginValues: UserLoginValues) => {
  return async (dispatch: (actions: any) => void): Promise<void> => {
    try {
      await UserService.loginUser(loginValues);
      dispatch(
        loginAction({ name: loginValues.email, email: loginValues.email }),
      );
    } catch (e) {
      if (e.response.status === 404) {
        // User Not Found
        dispatch(setUserErrorAction({ login: { email: 'Email not found!' } }));
      }

      if (e.response.status === 403) {
        // User Not Found
        dispatch(
          setUserErrorAction({
            login: {
              email: 'Email or Password did not matched',
              password: 'Email or Password did not matched',
            },
          }),
        );
      }
    }
  };
};

export const signUpUser = (signUpValues: UserSignUpValues) => {
  return async (dispatch: (actions: any) => void): Promise<void> => {
    try {
      const user = await UserService.signUpUser(signUpValues);
      if (user) dispatch(signUpAction({ name: user.name, email: user.email }));
    } catch (e) {
      console.log(e);
      console.log(e instanceof AlreadyExists);
      if (e instanceof AlreadyExists)
        dispatch(
          setUserErrorAction({
            signUp: {
              email: e.message,
            },
          }),
        );
    }
  };
};
