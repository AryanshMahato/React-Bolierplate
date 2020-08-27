import React from 'react';
import { Box } from '@material-ui/core';
import { LoginSubmitFunction, UserLoginValues } from '../types/User';
import { LoginForm } from '../Components';
import { loginUser } from '../Store/Actions/User';
import { connect } from 'react-redux';

interface Props {
  loginUser: LoginSubmitFunction;
}

const Login: React.FC<Props> = ({ loginUser }: Props) => {
  const submit = (values: UserLoginValues) => {
    console.log(values);
    loginUser(values);
  };

  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      flexDirection={'column'}
      textAlign={'center'}
      mt={'5rem'}
    >
      <LoginForm onSubmit={submit} />
    </Box>
  );
};

interface DispatchProps {
  loginUser: LoginSubmitFunction;
}

function mapDispatchToProps(
  dispatch: (dispatchFunction: any) => void,
): DispatchProps {
  return {
    loginUser: (values) => dispatch(loginUser(values)),
  };
}

export default connect(null, mapDispatchToProps)(Login);
