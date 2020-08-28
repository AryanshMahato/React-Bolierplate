import { Actions } from './Actions';
import { Product } from '../Product';

export interface CartState {
  products: Product[];
  errors: CartErrors;
}

export interface CartErrors {
  getCart: boolean;
}

export type CartReducer = (
  state: CartState,
  action: {
    type: Actions;
    payload: GetCartPayload;
  },
) => CartState;

// PAYLOAD TYPES

interface GetCartPayload {
  products: Product;
}
