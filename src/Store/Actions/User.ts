import { UserLoginValues, UserSignUpValues } from '../../types/User';
import { loginAction, signUpAction } from './Actions';

export const loginUser = (loginValues: UserLoginValues) => {
  return (dispatch: (actions: any) => void): void => {
    dispatch(loginAction({ username: 'Aryansh', email: 'aryansh@gmail.com' }));
  };
};

export const signUpUser = (signUpValues: UserSignUpValues) => {
  return (dispatch: (actions: any) => void): void => {
    dispatch(signUpAction({ username: 'Aryansh', email: 'aryansh@gmail.com' }));
  };
};
