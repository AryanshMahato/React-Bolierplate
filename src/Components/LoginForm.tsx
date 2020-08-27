import React from 'react';
import { FormikErrors, useFormik } from 'formik';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LoginSubmitFunction, UserLoginValues } from '../types/User';
import { loginValidation } from '../Validations';
import { Link } from 'react-router-dom';

interface Props {
  onSubmit: LoginSubmitFunction;
}

const LoginForm: React.FC<Props> = ({ onSubmit }: Props) => {
  const classes = useStyles();

  // Formik Property declaration
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    } as UserLoginValues,
    validationSchema: loginValidation,
    onSubmit,
  });

  // Returns error in field, returns empty string if there is no error
  const getError = (field: keyof FormikErrors<UserLoginValues>): string => {
    if (formik.errors[field] && formik.touched[field]) {
      return formik.errors[field] || '';
    }
    return '';
  };

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
          aria-describedby="Username"
          label="Username or Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={!!getError('username')}
          helperText={getError('username')}
          name={'username'}
          inputProps={{
            'data-testid': 'username',
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

        <Box mt={'2rem'}>
          <Button
            type={'submit'}
            variant={'contained'}
            color={'primary'}
            data-testid={'submit-button'}
          >
            Login
          </Button>
        </Box>

        <Box>
          <Typography>
            {"Don't have an account? "}
            <Link to={'/signup'} data-testid={'signup-link'}>
              Sign Up
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

export default LoginForm;
