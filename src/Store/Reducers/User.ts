import { UserReducer, UserState } from '../../types/Redux/User';
import { Actions } from '../../types/Redux/Actions';

const initialState = {
  email: '',
  username: '',
} as UserState;

export const userReducer: UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOGIN:
      return {
        ...state,
        email: action.payload.email,
        username: action.payload.username,
      };
    case Actions.SIGN_UP:
      return {
        ...state,
        email: action.payload.email,
        username: action.payload.username,
      };
    default:
      return { ...initialState };
  }
};
