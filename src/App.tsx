import React, { useEffect } from 'react';
import Routes from './Routes';
import { useHistory } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { ReduxState } from './types/Redux';
import { getUser } from './Store/Actions/User';
import { getCart } from './Store/Actions/Cart';

const App: React.FC = () => {
  const { replace } = useHistory();
  const dispatch = useDispatch();
  const { name, email, errors } = useSelector(
    (state: ReduxState) => state.user,
    shallowEqual,
  );

  useEffect(() => {
    // If IdToken is true and email or name is not there in redux state
    if (localStorage.getItem('idToken')) {
      // Get User data from API
      if (!name && !email) {
        console.log({ name, email });
        dispatch(getUser());
        dispatch(getCart());
      }
    }
  }, [name, email]);

  useEffect(() => {
    if (errors.tokenExpired) replace('/verify');
  }, [errors.tokenExpired]);

  // Application Entry Point
  return <Routes />;
};

export default App;
