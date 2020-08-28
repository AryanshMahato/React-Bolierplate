import { UserLoginValues, UserSignUpValues } from '../../types/User';
import {
  clearUserErrors,
  getUserAction,
  loginAction,
  logOutAction,
  setUserErrorAction,
  signUpAction,
  tokenExpiredAction,
  userNotFoundAction,
} from './Actions';
import { UserService } from '../../Services';
import {
  AlreadyExists,
  NotFound,
  TokenExpired,
  WrongCredentials,
} from '../../Errors';

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

export const logOutUser = () => {
  return async (dispatch: (actions: any) => void): Promise<void> => {
    localStorage.clear();

    dispatch(logOutAction());
  };
};

export const getUser = () => {
  return async (dispatch: (actions: any) => void): Promise<void> => {
    try {
      const email = localStorage.getItem('email');

      if (email) {
        const data = await UserService.getUser(email);

        if (data) return dispatch(getUserAction(data));
      }
      dispatch(logOutAction());
    } catch (e) {
      if (e instanceof NotFound) {
        localStorage.removeItem('idToken');
        dispatch(userNotFoundAction());
      }
      if (e instanceof TokenExpired) {
        localStorage.removeItem('idToken');
        dispatch(tokenExpiredAction());
      }
    }
  };
};
