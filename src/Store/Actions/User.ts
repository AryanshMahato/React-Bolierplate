import { UserLoginValues, UserSignUpValues } from '../../types/User';
import {
  clearUserErrors,
  loginAction,
  setUserErrorAction,
  signUpAction,
} from './Actions';
import { UserService } from '../../Services';
import { AlreadyExists, NotFound, WrongCredentials } from '../../Errors';

export const loginUser = (loginValues: UserLoginValues) => {
  return async (dispatch: (actions: any) => void): Promise<void> => {
    //Removes idToken for no-user-conflict
    localStorage.removeItem('idToken');

    try {
      const user = await UserService.loginUser(loginValues);

      if (user) {
        dispatch(loginAction({ name: user.name, email: user.email }));

        dispatch(clearUserErrors());
      }
    } catch (e) {
      if (e instanceof NotFound) {
        // User Not Found
        dispatch(setUserErrorAction({ login: { email: e.message } }));
      }

      if (e instanceof WrongCredentials) {
        // Email or Password is wrong
        dispatch(
          setUserErrorAction({
            login: {
              email: e.message,
              password: e.message,
            },
          }),
        );
      }
    }
  };
};

export const signUpUser = (signUpValues: UserSignUpValues) => {
  return async (dispatch: (actions: any) => void): Promise<void> => {
    //Removes idToken for no-user-conflict
    localStorage.removeItem('idToken');

    try {
      const user = await UserService.signUpUser(signUpValues);

      if (user) {
        dispatch(signUpAction({ name: user.name, email: user.email }));
        dispatch(clearUserErrors());
      }
    } catch (e) {
      if (e instanceof AlreadyExists)
        // Email already exists
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
