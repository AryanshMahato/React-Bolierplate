import React from 'react';
import { Route } from 'react-router-dom';
import { Landing, Login, SignUp } from './Pages';

const Routes: React.FC = () => {
  return (
    <>
      <Route exact path={'/'} component={Landing} />
      <Route exact path={'/register'} component={Login} />
      <Route exact path={'/login'} component={SignUp} />
    </>
  );
};

export default Routes;
