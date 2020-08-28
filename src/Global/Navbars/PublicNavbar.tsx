import React from 'react';
import {
  AppBar,
  Button,
  createStyles,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';

// Navbar for all the Public Pages
const PublicNavbar: React.FC = () => {
  const classes = useStyles();
  const { push } = useHistory();

  const loginClicked = () => {
    push('/login');
  };

  const signUpClicked = () => {
    push('/signup');
  };

  const renderLink = () => {
    if (window.location.pathname === '/login') {
      //  Show Login Button
      return (
        <Button color="inherit" onClick={signUpClicked}>
          Sign Up
        </Button>
      );
    }
    return (
      <Button color="inherit" onClick={loginClicked}>
        Login
      </Button>
    );
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Ecommerce Website
        </Typography>
        {renderLink()}
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default PublicNavbar;
