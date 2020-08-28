import { CartService } from '../../Services';
import {
  addToCartAction,
  clearCartAction,
  getCartAction,
  logOutAction,
  removeFromCartAction,
  tokenExpiredAction,
  userNotFoundAction,
} from './Actions';
import { NotFound, TokenExpired } from '../../Errors';

// Dispatch function to get cart
export const getCart = () => {
  return async (dispatch: (actions: any) => void): Promise<void> => {
    try {
      const email = localStorage.getItem('email');

      if (email) {
        const data = await CartService.getCart(email);

        if (data) return dispatch(getCartAction(data));
      }
      dispatch(logOutAction());
      dispatch(clearCartAction());
    } catch (e) {
      if (e instanceof NotFound) {
        localStorage.removeItem('idToken');
        dispatch(userNotFoundAction());
      }
      if (e instanceof TokenExpired) {
        localStorage.removeItem('idToken');
        dispatch(clearCartAction());
        dispatch(tokenExpiredAction());
      }
    }
  };
};

// Dispatch function to add items in cart
export const addToCart = (productId: number) => {
  return async (dispatch: (actions: any) => void): Promise<void> => {
    try {
      const email = localStorage.getItem('email');

      if (email) {
        const data = await CartService.addToCart({
          userId: email,
          productId: '' + productId,
        });

        if (data) return dispatch(addToCartAction(data));
      }
      dispatch(logOutAction());
      dispatch(clearCartAction());
    } catch (e) {
      if (e instanceof NotFound) {
        localStorage.removeItem('idToken');
        dispatch(userNotFoundAction());
      }
      if (e instanceof TokenExpired) {
        localStorage.removeItem('idToken');
        dispatch(clearCartAction());
        dispatch(tokenExpiredAction());
      }
    }
  };
};

// Dispatch function to remove item from cart
export const removeFromCart = (productId: number, total?: boolean) => {
  return async (dispatch: (actions: any) => void): Promise<void> => {
    try {
      const email = localStorage.getItem('email');

      if (email) {
        const data = await CartService.removeFromCart({
          userId: email,
          productId: '' + productId,
          total,
        });

        if (data) return dispatch(removeFromCartAction(data));
      }
      dispatch(logOutAction());
      dispatch(clearCartAction());
    } catch (e) {
      if (e instanceof NotFound) {
        localStorage.removeItem('idToken');
        dispatch(userNotFoundAction());
      }
      if (e instanceof TokenExpired) {
        localStorage.removeItem('idToken');
        dispatch(clearCartAction());
        dispatch(tokenExpiredAction());
      }
    }
  };
};
