import React from 'react';
import { SignUpForm } from '../Components';
import { Box } from '@material-ui/core';
import { SignUpSubmitFunction } from '../types/User';

const SignUp: React.FC = () => {
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
      <SignUpForm onSubmit={onSubmit} />
    </Box>
  );
};

export default SignUp;
