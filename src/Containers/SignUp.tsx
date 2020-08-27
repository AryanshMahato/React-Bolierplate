import React, { useEffect } from 'react';
import { SignUpForm } from '../Components';
import { Box } from '@material-ui/core';
import { SignUpSubmitFunction } from '../types/User';
import { signUpUser } from '../Store/Actions/User';
import { connect } from 'react-redux';
import { UserErrors } from '../types/Redux/User';
import { ReduxState } from '../types/Redux';
import { useHistory } from 'react-router';

interface DispatchProps {
  signUpUser: SignUpSubmitFunction;
}

interface StateProps {
  errors: UserErrors;
  name: string;
  email: string;
}

type Props = DispatchProps & StateProps;

const SignUp: React.FC<Props> = ({
  signUpUser,
  errors,
  name,
  email,
}: Props) => {
  const { push, replace } = useHistory();

  useEffect(() => {
    const idToken = localStorage.getItem('idToken');

    // If token is true and name, email is stored in Redux Store
    if (idToken) {
      // Redirect to Products Page
      if (name && email) replace('/products');
    }

    // Redirects to Verify Page if email and name is present in Redux Store
    // Means User Sign Up Successful, Ready to Verify
    if (name && email) push('/verify');
  }, [name, email]);

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
    name: state.user.name,
    email: state.user.email,
  };
}

function mapDispatchToProps(dispatch: (action: any) => void): DispatchProps {
  return {
    signUpUser: (values) => dispatch(signUpUser(values)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
