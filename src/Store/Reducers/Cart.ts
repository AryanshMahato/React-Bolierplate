import { CartReducer, CartState } from '../../types/Redux/Cart';
import { Actions } from '../../types/Redux/Actions';

const initialState = {
  products: [],
  errors: { getCart: false },
} as CartState;

export const cartReducer: CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.GET_CART:
      return {
        ...state,
        products: action.payload.products,
        errors: {
          ...initialState.errors,
        },
      };
    case Actions.ADD_TO_CART:
      return {
        ...state,
        products: action.payload.products,
        errors: {
          ...initialState.errors,
        },
      };
    case Actions.REMOVE_FROM_CART:
      return {
        ...state,
        products: action.payload.products,
        errors: {
          ...initialState.errors,
        },
      };
    case Actions.CLEAR_CART:
      return {
        ...state,
        products: initialState.products,
        errors: {
          ...initialState.errors,
        },
      };
    default:
      return { ...state };
  }
};
