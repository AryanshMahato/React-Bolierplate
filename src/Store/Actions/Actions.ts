// import { ActionType } from '../../types/ActionType';
import {
  UserErrors,
  UserLoginPayload,
  UserSignUpPayload,
} from '../../types/Redux/User';
import { ActionFunction, ActionFunctionNoPayload } from '../../types/Redux';
import { Actions } from '../../types/Redux/Actions';
import { User } from '../../types/User';
import { Cart } from '../../types/Cart';

// Action when user login
export const loginAction: ActionFunction<UserLoginPayload> = (payload) => ({
  type: Actions.LOGIN,
  payload,
});

// Action when user signup
export const signUpAction: ActionFunction<UserSignUpPayload> = (payload) => ({
  type: Actions.SIGN_UP,
  payload,
});

// Action when there is some error during user login or signup
export const setUserErrorAction: ActionFunction<UserErrors> = (payload) => ({
  type: Actions.SET_USER_ERROR,
  payload,
});

// Action to log out user
export const logOutAction: ActionFunctionNoPayload = () => ({
  type: Actions.LOG_OUT,
});

// Action to get user data
export const getUserAction: ActionFunction<User> = (payload) => ({
  type: Actions.GET_USER,
  payload,
});

// Action when there is some error during fetching user data
export const userNotFoundAction: ActionFunctionNoPayload = () => ({
  type: Actions.USER_NOT_FOUND,
});

// Action when auth token is expired
export const tokenExpiredAction: ActionFunctionNoPayload = () => ({
  type: Actions.TOKEN_EXPIRED,
});

// Action to clear all the user errors from state
export const clearUserErrors: ActionFunctionNoPayload = () => ({
  type: Actions.CLEAR_USER_ERRORS,
});

//! CART

// Action to fetch cart from server
export const getCartAction: ActionFunction<Cart> = (payload) => ({
  type: Actions.GET_CART,
  payload,
});

// Action to add items to cart
export const addToCartAction: ActionFunction<Cart> = (payload) => ({
  type: Actions.ADD_TO_CART,
  payload,
});

// Action to remove items to cart
export const removeFromCartAction: ActionFunction<Cart> = (payload) => ({
  type: Actions.REMOVE_FROM_CART,
  payload,
});

// Action to clear items in cart
export const clearCartAction: ActionFunctionNoPayload = () => ({
  type: Actions.CLEAR_CART,
});
