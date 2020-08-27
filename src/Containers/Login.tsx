import React from 'react';
import { Box } from '@material-ui/core';
import { SignUpSubmitFunction } from '../types/User';
import { LoginForm } from '../Components';

const Login: React.FC = () => {
  const onSubmit: SignUpSubmitFunction = (values) => {
    console.log(values);
    return;
  };
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      flexDirection={'column'}
      textAlign={'center'}
      mt={'5rem'}
    >
      <LoginForm onSubmit={onSubmit} />
    </Box>
  );
};

export default Login;
