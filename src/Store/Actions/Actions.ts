// import { ActionType } from '../../types/ActionType';
import { UserLoginPayload, UserSignUpPayload } from '../../types/Redux/User';
import { ActionFunction } from '../../types/Redux';
import { Actions } from '../../types/Redux/Actions';

export const loginAction: ActionFunction<UserLoginPayload> = (payload) => ({
  type: Actions.LOGIN,
  payload,
});

export const signUpAction: ActionFunction<UserSignUpPayload> = (payload) => ({
  type: Actions.SIGN_UP,
  payload,
});
