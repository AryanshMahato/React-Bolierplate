// import { ActionType } from '../../types/ActionType';
import {
  UserErrors,
  UserLoginPayload,
  UserSignUpPayload,
} from '../../types/Redux/User';
import { ActionFunction, ActionFunctionNoPayload } from '../../types/Redux';
import { Actions } from '../../types/Redux/Actions';

export const loginAction: ActionFunction<UserLoginPayload> = (payload) => ({
  type: Actions.LOGIN,
  payload,
});

export const signUpAction: ActionFunction<UserSignUpPayload> = (payload) => ({
  type: Actions.SIGN_UP,
  payload,
});

export const setUserErrorAction: ActionFunction<UserErrors> = (payload) => ({
  type: Actions.SET_USER_ERROR,
  payload,
});

export const logOutAction: ActionFunctionNoPayload = () => ({
  type: Actions.LOG_OUT,
});

export const clearUserErrors: ActionFunctionNoPayload = () => ({
  type: Actions.CLEAR_USER_ERRORS,
});
