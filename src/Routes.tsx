import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Landing, Login, Products, SignUp, UnAuthorized } from './Pages';
import { PrivateRoute } from './Global';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={'/'} component={Landing} />
      <Route exact path={'/register'} component={Login} />
      <Route exact path={'/login'} component={SignUp} />
      <PrivateRoute exact path={'/products'} component={Products} />
      <PrivateRoute exact path={'/unauthorized'} component={UnAuthorized} />
    </Switch>
  );
};

export default Routes;
