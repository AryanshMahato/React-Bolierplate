import React, { useEffect } from 'react';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { FormikErrors, useFormik } from 'formik';
import {
  UserVerificationValues,
  VerificationSubmitFunction,
} from '../types/User';
import { verifyValidation } from '../Validations';
import { makeStyles } from '@material-ui/core/styles';
import { UserErrors } from '../types/Redux/User';

interface Props {
  onSubmit: VerificationSubmitFunction;
  errors: UserErrors;
}

const VerificationForm: React.FC<Props> = ({ onSubmit, errors }: Props) => {
  const classes = useStyles();

  // Formik Property declaration
  const formik = useFormik({
    initialValues: {
      password: '',
    } as UserVerificationValues,
    validationSchema: verifyValidation,
    onSubmit,
  });

  // Returns error in field, returns empty string if there is no error
  const getError = (
    field: keyof FormikErrors<UserVerificationValues>,
  ): string => {
    if (formik.errors[field] && formik.touched[field]) {
      return formik.errors[field] || '';
    }
    return '';
  };

  useEffect(() => {
    formik.setErrors({
      ...errors.login,
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

export default VerificationForm;
