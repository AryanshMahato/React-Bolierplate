import { combineReducers } from 'redux';
import { userReducer } from './User';
import { cartReducer } from './Cart';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
