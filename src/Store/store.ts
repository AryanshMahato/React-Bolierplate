import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducers from './Reducers/rootReducer';

// Store configurations
function configureStore(initialState = {}) {
  const middleware = [thunkMiddleware]; // Add additional redux middleware here
  const middlewareEnhancer = applyMiddleware(...middleware);

  const enhancers = [middlewareEnhancer]; // Add additional enhancers here

  return createStore(
    combineReducers,
    initialState,
    composeWithDevTools(...enhancers),
  );
}

export default configureStore({});
