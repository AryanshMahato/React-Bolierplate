import React from 'react';
import { SignUpForm } from '../Components';
import { Box } from '@material-ui/core';
import { SignUpSubmitFunction } from '../types/User';
import { signUpUser } from '../Store/Actions/User';
import { connect } from 'react-redux';
import { UserErrors } from '../types/Redux/User';
import { ReduxState } from '../types/Redux';

interface DispatchProps {
  signUpUser: SignUpSubmitFunction;
}

interface StateProps {
  errors: UserErrors;
}

type Props = DispatchProps & StateProps;

const SignUp: React.FC<Props> = ({ signUpUser, errors }: Props) => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      flexDirection={'column'}
      textAlign={'center'}
      mt={'5rem'}
    >
      <SignUpForm onSubmit={signUpUser} errors={errors} />
    </Box>
  );
};

function mapStateToProps(state: ReduxState): StateProps {
  return {
    errors: state.user.errors,
  };
}

function mapDispatchToProps(dispatch: (action: any) => void): DispatchProps {
  return {
    signUpUser: (values) => dispatch(signUpUser(values)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
