import React from 'react';
import { SignUpForm } from '../Components';
import { Box } from '@material-ui/core';
import { SignUpSubmitFunction } from '../types/User';
import { signUpUser } from '../Store/Actions/User';
import { connect } from 'react-redux';

interface DispatchPros {
  signUpUser: SignUpSubmitFunction;
}

type Props = DispatchPros;

const SignUp: React.FC<Props> = ({ signUpUser }: Props) => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      flexDirection={'column'}
      textAlign={'center'}
      mt={'5rem'}
    >
      <SignUpForm onSubmit={signUpUser} />
    </Box>
  );
};

function mapDispatchToProps(dispatch: (action: any) => void): DispatchPros {
  return {
    signUpUser: (values) => dispatch(signUpUser(values)),
  };
}

export default connect(null, mapDispatchToProps)(SignUp);
