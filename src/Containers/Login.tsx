import React, { useEffect } from 'react';
import { Box } from '@material-ui/core';
import { LoginSubmitFunction } from '../types/User';
import { LoginForm } from '../Components';
import { loginUser } from '../Store/Actions/User';
import { connect } from 'react-redux';
import { ReduxState } from '../types/Redux';
import { UserErrors } from '../types/Redux/User';
import { useHistory } from 'react-router';

interface DispatchProps {
  loginUser: LoginSubmitFunction;
}

interface StateProps {
  errors: UserErrors;
  name: string;
  email: string;
}

type Props = DispatchProps & StateProps;

const Login: React.FC<Props> = ({ loginUser, errors, name, email }: Props) => {
  const { replace } = useHistory();

  useEffect(() => {
    // If token is true and name, email is stored in Redux Store
    if (localStorage.getItem('idToken')) {
      // Redirect to Products Page
      if (name && email) replace('/products');
    }
  }, [name, email]);

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
    name: state.user.name,
    email: state.user.email,
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
