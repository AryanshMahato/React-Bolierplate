import { Actions } from './Actions';

export interface UserState {
  username: string;
  email: string;
}

export type UserReducer = (
  state: UserState,
  action: {
    type: Actions;
    payload: UserLoginPayload | UserSignUpPayload;
  },
) => UserState;

// PAYLOAD TYPES

export interface UserLoginPayload {
  username: string;
  email: string;
}

export interface UserSignUpPayload {
  username: string;
  email: string;
}
