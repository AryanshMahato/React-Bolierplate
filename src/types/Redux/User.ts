import { Actions } from './Actions';

export interface UserState {
  name: string;
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
  name: string;
  email: string;
}

export interface UserSignUpPayload {
  name: string;
  email: string;
}
