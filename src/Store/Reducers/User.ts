import { UserReducer, UserState } from '../../types/Redux/User';
import { Actions } from '../../types/Redux/Actions';

const initialState = {
  email: '',
  name: '',
  cartId: '',
  errors: {
    signUp: {
      name: '',
      email: '',
      password: '',
    },
    login: {
      email: '',
      password: '',
    },
    tokenExpired: false,
    userNotFound: false,
  },
} as UserState;

export const userReducer: UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOGIN:
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        cartId: action.payload.cartId,
      };
    case Actions.SIGN_UP:
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
      };
    case Actions.LOG_OUT:
      return {
        ...state,
        email: initialState.email,
        name: initialState.name,
      };
    case Actions.GET_USER:
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        cartId: action.payload.cartId,
      };
    case Actions.TOKEN_EXPIRED:
      return {
        ...initialState,
        errors: {
          ...initialState.errors,
          tokenExpired: true,
        },
      };
    case Actions.USER_NOT_FOUND:
      return {
        ...initialState,
        errors: {
          ...initialState.errors,
          userNotFound: true,
        },
      };
    case Actions.SET_USER_ERROR:
      return {
        ...state,
        errors: { ...state.errors, ...action.payload },
      };
    case Actions.CLEAR_USER_ERRORS:
      return {
        ...state,
        errors: { ...initialState.errors },
      };
    default:
      return { ...state };
  }
};
