import React from 'react';
import {
  AppBar,
  Box,
  createStyles,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Popover,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { AccountCircle, ShoppingCart } from '@material-ui/icons';
import { connect } from 'react-redux';
import { logOutUser } from '../../Store/Actions/User';
import { useHistory } from 'react-router';
import { Cart } from '../../Containers';

interface DispatchProps {
  logOut: () => void;
}

type Props = DispatchProps;

// Product Page Navbar
const ProductsNavbar: React.FC<Props> = ({ logOut }: Props) => {
  const classes = useStyles();
  const { push } = useHistory();

  // Profile Handlers
  const [profileAnchor, setProfileAnchor] = React.useState<null | HTMLElement>(
    null,
  );
  const profileOpen = Boolean(profileAnchor);

  const handleProfile = (event: React.MouseEvent<HTMLElement>) => {
    setProfileAnchor(event.currentTarget);
  };

  const profileClose = () => {
    setProfileAnchor(null);
  };

  // Cart Handlers
  const [cartAnchor, setCartAnchor] = React.useState<null | HTMLElement>(null);
  const cartOpen = Boolean(cartAnchor);

  const handleCart = (event: React.MouseEvent<HTMLElement>) => {
    setCartAnchor(event.currentTarget);
  };

  const cartClose = () => {
    setCartAnchor(null);
  };

  const logOutClicked = () => {
    push('/login');
    logOut();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Ecommerce Website
        </Typography>
        <div>
          <IconButton color={'inherit'} onClick={handleProfile}>
            <AccountCircle />
          </IconButton>
          <Menu
            id={'menu'}
            anchorEl={profileAnchor}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={profileOpen}
            onClose={profileClose}
          >
            <MenuItem onClick={logOutClicked}>Log Out</MenuItem>
          </Menu>
        </div>
        <div>
          <IconButton onClick={handleCart} color={'inherit'}>
            <ShoppingCart />
          </IconButton>
          {/* Shopping Cart */}
          <Popover
            id={'cart-popover'}
            open={cartOpen}
            anchorEl={cartAnchor}
            onClose={cartClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box m={2} width={'90vw'} maxWidth={800}>
              <Typography component={'h2'} className={classes.cartAnnotation}>
                Cart
              </Typography>
              <Divider />
              <Cart closePopper={cartClose} />
            </Box>
          </Popover>
        </div>
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
    cartAnnotation: {
      fontSize: 24,
    },
  }),
);

const mapDispatchToProps = (dispatch: (action: any) => void) => ({
  logOut: () => dispatch(logOutUser()),
});

export default connect(null, mapDispatchToProps)(ProductsNavbar);
