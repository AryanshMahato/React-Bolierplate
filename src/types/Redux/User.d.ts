// Generic Type of all Action Functions
import { ActionType } from '../ActionType';

export interface UserState {
  username: string;
  email: string;
}

export type UserReducer = (
  state: UserState,
  action: {
    type: ActionType;
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
