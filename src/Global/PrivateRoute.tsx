import React from 'react';
import { Route, RouteProps } from 'react-router';
import { UnAuthorized } from '../Pages';

// If Authorized then shows Component else shows UnAuthorized Page
const PrivateRoute: React.FC<RouteProps> = (props) => {
  const idToken = localStorage.getItem('idToken');

  // Authorized
  if (idToken) return <Route {...props} />;

  // Not Authorized
  return <UnAuthorized />;
};

export default PrivateRoute;
