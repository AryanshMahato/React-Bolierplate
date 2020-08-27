import { UserReducer, UserState } from '../../types/Redux/User';
import { Actions } from '../../types/Redux/Actions';

const initialState = {
  email: '',
  name: '',
} as UserState;

export const userReducer: UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOGIN:
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
      };
    case Actions.SIGN_UP:
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
      };
    default:
      return { ...initialState };
  }
};
