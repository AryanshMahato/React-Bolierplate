// import { ActionType } from '../../types/ActionType';
import { UserLoginPayload, UserSignUpPayload } from '../../types/Redux/User';
import { ActionFunction } from '../../types/Redux';

export const loginAction: ActionFunction<UserLoginPayload> = (payload) => ({
  type: 'LOGIN',
  payload,
});

export const signUpAction: ActionFunction<UserSignUpPayload> = (payload) => ({
  type: 'SIGN_UP',
  payload,
});
