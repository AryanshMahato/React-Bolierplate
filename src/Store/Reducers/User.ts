import { UserState, UserReducer } from '../../types/Redux/User';
// import { ActionType } from '../../types/Redux/ActionType';

const initialState = {
  email: '',
  username: '',
} as UserState;

export const userReducer: UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        email: action.payload.email,
        username: action.payload.username,
      };
    // case ActionType.SIGN_UP:
    //   return {
    //     email: action.payload.email,
    //     username: action.payload.username,
    //     ...state,
    //   };
    default:
      return { ...initialState };
  }
};
