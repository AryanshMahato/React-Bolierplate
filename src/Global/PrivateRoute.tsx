import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

// If Authorized then shows Component else shows UnAuthorized Page
const PrivateRoute: React.FC<RouteProps> = (props) => {
  const idToken = localStorage.getItem('idToken');

  // Authorized
  if (idToken) return <Route {...props} />;

  // Not Authorized
  return <Redirect to={'/unauthorized'} />;
};

export default PrivateRoute;
