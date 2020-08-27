import { UserLoginValues } from '../../types/User';
import { loginAction } from './Actions';

export const loginUser = (loginValues: UserLoginValues) => {
  return (dispatch: (actions: any) => void): void => {
    dispatch(loginAction({ username: 'Aryansh', email: 'aryansh@gmail.com' }));
  };
};
