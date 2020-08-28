import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  createStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../Store/Actions/Cart';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import { Product } from '../types/Product';

interface Props {
  product: Product;
}

const CartProduct: React.FC<Props> = ({ product }: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const removeClicked = () => {
    dispatch(removeFromCart(product!.id, true));
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
        style={{ width: '140px' }}
        image={product?.imagePath}
        title="Contemplative Reptile"
      />
      <CardContent className={classes.card}>
        <Box
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          mb={1}
        >
          <Typography variant="h5" component="h2">
            {product?.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ marginLeft: 'auto' }}
          >
            {product?.price}
          </Typography>
        </Box>
        <Typography gutterBottom component="p">
          {product?.description}
        </Typography>
      </CardContent>
      <CardActions style={{ width: '300px' }}>
        <Box display={'flex'} alignItems={'center'}>
          <AddCircle />
          <Typography className={classes.quantity}>1</Typography>
          <RemoveCircle />
        </Box>
        <Button
          disableElevation
          variant={'contained'}
          style={{ marginLeft: 'auto' }}
          color={'secondary'}
          onClick={removeClicked}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 12,
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        flexFlow: 'column',
        alignItems: 'center',
      },
    },
    card: {
      marginLeft: 16,
      width: 300,
    },
    input: {
      maxWidth: 48,
      marginLeft: 16,
    },
    quantity: {
      marginLeft: 4,
      marginRight: 4,
    },
  }),
);

export default CartProduct;
