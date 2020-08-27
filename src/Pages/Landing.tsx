import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const Landing: React.FC = () => {
  const classes = useStyles();
  const { push } = useHistory();

  const signUpClicked = () => {
    push('/signup');
  };
  const loginClicked = () => {
    push('/login');
  };

  return (
    <Box
      display={'flex'}
      height={'80vh'}
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      textAlign={'center'}
    >
      <Typography variant={'h2'} className={classes.annotation}>
        Welcome to the Ecommerce Website
      </Typography>
      <Box className={classes.buttons}>
        <Button
          onClick={signUpClicked}
          variant={'contained'}
          color={'primary'}
          data-testid={'signUpButton'}
        >
          Sign Up
        </Button>
        <Button
          onClick={loginClicked}
          variant={'contained'}
          color={'primary'}
          data-testid={'loginButton'}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  annotation: {
    fontWeight: 'bold',
  },
  buttons: {
    width: '80vw',
    maxWidth: '250px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: theme.spacing(5),
  },
}));

export default Landing;
