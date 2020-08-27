import { Actions } from './Actions';

export type ActionFunction<Payload> = (
  payload: Payload,
) => { type: Actions; payload: Payload };
