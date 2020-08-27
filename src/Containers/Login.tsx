import React from 'react';
import { Box } from '@material-ui/core';
import { LoginSubmitFunction } from '../types/User';
import { LoginForm } from '../Components';
import { loginUser } from '../Store/Actions/User';
import { connect } from 'react-redux';
import { ReduxState } from '../types/Redux';
import { UserErrors } from '../types/Redux/User';

interface DispatchProps {
  loginUser: LoginSubmitFunction;
}

interface StateProps {
  errors: UserErrors;
}

type Props = DispatchProps & StateProps;

const Login: React.FC<Props> = ({ loginUser, errors }: Props) => {
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      flexDirection={'column'}
      textAlign={'center'}
      mt={'5rem'}
    >
      <LoginForm onSubmit={loginUser} errors={errors} />
    </Box>
  );
};

function mapStateToProps(state: ReduxState): StateProps {
  return {
    errors: state.user.errors,
  };
}

function mapDispatchToProps(
  dispatch: (dispatchFunction: any) => void,
): DispatchProps {
  return {
    loginUser: (values) => dispatch(loginUser(values)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
