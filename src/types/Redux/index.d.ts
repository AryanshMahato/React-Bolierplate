import { ActionType } from '../ActionType';

export type ActionFunction<Payload> = (
  payload: Payload,
) => { type: ActionType; payload: Payload };
