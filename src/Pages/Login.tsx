import React from 'react';
import { Login } from '../Containers';
import { PublicLayout } from '../Global';

const LoginPage: React.FC = () => {
  return (
    <PublicLayout>
      <Login />
    </PublicLayout>
  );
};

export default LoginPage;
