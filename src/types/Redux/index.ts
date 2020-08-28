import { Actions } from './Actions';
import { UserState } from './User';

export type ActionFunction<Payload> = (
  payload: Payload,
) => { type: Actions; payload: Payload };

export type ActionFunctionNoPayload = () => { type: Actions };

export interface ReduxState {
  user: UserState;
}
