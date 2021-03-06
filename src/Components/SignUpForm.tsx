import React, { useEffect } from 'react';
import { FormikErrors, useFormik } from 'formik';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SignUpSubmitFunction, UserSignUpValues } from '../types/User';
import { signUpValidation } from '../Validations';
import { Link } from 'react-router-dom';
import { UserErrors } from '../types/Redux/User';

interface Props {
  onSubmit: SignUpSubmitFunction;
  errors: UserErrors;
}

const SignUpForm: React.FC<Props> = ({ onSubmit, errors }: Props) => {
  const classes = useStyles();

  // Formik Property declaration
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    } as UserSignUpValues,
    validationSchema: signUpValidation,
    onSubmit,
  });

  // Returns error in field, returns empty string if there is no error
  const getError = (field: keyof FormikErrors<UserSignUpValues>): string => {
    if (formik.errors[field] && formik.touched[field]) {
      return formik.errors[field] || '';
    }
    return '';
  };

  useEffect(() => {
    formik.setErrors({
      ...errors.signUp,
    });
  }, [errors]);

  return (
    <form noValidate onSubmit={formik.handleSubmit}>
      <Box
        display={'flex'}
        flexDirection={'column'}
        width={'80vw'}
        maxWidth={'400px'}
        className={classes.form}
      >
        <TextField
          type={'text'}
          aria-describedby="name"
          label="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={!!getError('name')}
          helperText={getError('name')}
          name={'name'}
          inputProps={{
            'data-testid': 'name',
          }}
          variant={'outlined'}
        />
        <TextField
          type={'email'}
          aria-describedby="Email"
          label="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={!!getError('email')}
          helperText={getError('email')}
          name={'email'}
          inputProps={{
            'data-testid': 'email',
          }}
          variant={'outlined'}
        />
        <TextField
          type={'password'}
          aria-describedby="Password"
          label="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={!!getError('password')}
          helperText={getError('password')}
          name={'password'}
          inputProps={{
            'data-testid': 'password',
          }}
          variant={'outlined'}
        />
        <TextField
          type={'password'}
          aria-describedby="Confirm Password"
          label="Confirm Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={!!getError('confirmPassword')}
          helperText={getError('confirmPassword')}
          name={'confirmPassword'}
          inputProps={{
            'data-testid': 'confirmPassword',
          }}
          variant={'outlined'}
        />
        <Box mt={'2rem'}>
          <Button
            type={'submit'}
            variant={'contained'}
            color={'primary'}
            data-testid={'submit-button'}
          >
            Sign Up
          </Button>
        </Box>

        <Box>
          <Typography>
            {'Already have an account? '}
            <Link to={'/login'} data-testid={'login-link'}>
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </form>
  );
};

const useStyles = makeStyles((theme) => ({
  form: {
    '&>*': {
      marginTop: theme.spacing(3),
    },
    '& a': {
      fontWeight: 'bold',
    },
  },
}));

export default SignUpForm;
