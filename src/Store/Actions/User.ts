import { UserLoginValues, UserSignUpValues } from '../../types/User';
import {
  clearCartAction,
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

// Dispatch function to authenticate user
export const loginUser = (loginValues: UserLoginValues) => {
  return async (dispatch: (actions: any) => void): Promise<void> => {
    //Removes idToken for no-user-conflict
    localStorage.removeItem('idToken');

    try {
      const user = await UserService.loginUser(loginValues);

      if (user) {
        dispatch(
          loginAction({
            name: user.name,
            email: user.email,
            cartId: user.cartId,
          }),
        );

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

// Dispatch function to register user
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

// Dispatch Function to log out user
export const logOutUser = () => {
  return async (dispatch: (actions: any) => void): Promise<void> => {
    localStorage.clear();

    dispatch(logOutAction());
    dispatch(clearCartAction());
  };
};

// Dispatch Function to fetch user data from server
export const getUser = () => {
  return async (dispatch: (actions: any) => void): Promise<void> => {
    try {
      const email = localStorage.getItem('email');

      if (email) {
        const data = await UserService.getUser(email);

        if (data) return dispatch(getUserAction(data));
      }
      dispatch(logOutAction());
      dispatch(clearCartAction());
    } catch (e) {
      if (e instanceof NotFound) {
        localStorage.removeItem('idToken');
        dispatch(userNotFoundAction());
      }
      if (e instanceof TokenExpired) {
        localStorage.removeItem('idToken');
        dispatch(clearCartAction());
        dispatch(tokenExpiredAction());
      }
    }
  };
};
