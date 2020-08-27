import React from 'react';
import { Box } from '@material-ui/core';
import { LoginSubmitFunction } from '../types/User';
import { LoginForm } from '../Components';
import { loginUser } from '../Store/Actions/User';
import { connect } from 'react-redux';

interface DispatchProps {
  loginUser: LoginSubmitFunction;
}

type Props = DispatchProps;

const Login: React.FC<Props> = ({ loginUser }: Props) => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      flexDirection={'column'}
      textAlign={'center'}
      mt={'5rem'}
    >
      <LoginForm onSubmit={loginUser} />
    </Box>
  );
};

function mapDispatchToProps(
  dispatch: (dispatchFunction: any) => void,
): DispatchProps {
  return {
    loginUser: (values) => dispatch(loginUser(values)),
  };
}

export default connect(null, mapDispatchToProps)(Login);
