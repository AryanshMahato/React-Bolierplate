import { Actions } from './Actions';
import { UserState } from './User';
import { CartState } from './Cart';

export type ActionFunction<Payload> = (
  payload: Payload,
) => { type: Actions; payload: Payload };

export type ActionFunctionNoPayload = () => { type: Actions };

export interface ReduxState {
  user: UserState;
  cart: CartState;
}
