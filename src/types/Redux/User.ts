import { Actions } from './Actions';

export interface UserState {
  name: string;
  email: string;
  errors: UserErrors;
}

export interface UserErrors {
  signUp?: {
    name?: string;
    email?: string;
    password?: string;
  };
  login?: {
    email?: string;
    password?: string;
  };
}

export type UserReducer = (
  state: UserState,
  action: {
    type: Actions;
    payload: UserLoginPayload & UserSignUpPayload & UserErrorPayload;
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

type UserErrorPayload = {
  errors: UserErrors;
};
