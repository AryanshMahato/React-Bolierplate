import { CartReducer, CartState } from '../../types/Redux/Cart';

const initialState = {
  products: [],
  errors: { getCart: false },
} as CartState;

export const cartReducer: CartReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
