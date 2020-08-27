import React from 'react';
import { useFormik } from 'formik';
import { Box, Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { SignUpSubmitFunction, UserSignUpValues } from '../types/User';

interface Props {
  onSubmit: SignUpSubmitFunction;
}

const SignUpForm: React.FC<Props> = ({ onSubmit }: Props) => {
  const classes = useStyles();

  // Formik Property declaration
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    } as UserSignUpValues,
    onSubmit,
  });

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
          id="username"
          type={'text'}
          aria-describedby="Username"
          label="Username"
          onChange={formik.handleChange}
          name={'username'}
          variant={'outlined'}
        />
        <TextField
          id="email"
          type={'email'}
          aria-describedby="Email"
          label="Email"
          onChange={formik.handleChange}
          name={'email'}
          variant={'outlined'}
        />
        <TextField
          id="password"
          type={'password'}
          aria-describedby="Password"
          label="Password"
          onChange={formik.handleChange}
          name={'password'}
          variant={'outlined'}
        />
        <TextField
          id="confirmPassword"
          type={'confirmPassword'}
          aria-describedby="Confirm Password"
          label="Confirm Password"
          onChange={formik.handleChange}
          name={'confirmPassword'}
          variant={'outlined'}
        />
        <Box mt={'2rem'}>
          <Button type={'submit'} variant={'contained'} color={'primary'}>
            Sign Up
          </Button>
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
  },
}));

export default SignUpForm;
