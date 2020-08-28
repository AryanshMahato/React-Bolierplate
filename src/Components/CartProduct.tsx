import React, { ChangeEvent, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  createStyles,
  Input,
  Theme,
  Typography,
} from '@material-ui/core';
import { PRODUCTS } from '../Constants';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../Store/Actions/Cart';

interface Props {
  id: number;
}

const CartProduct: React.FC<Props> = ({ id }: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const product = PRODUCTS.find((product) => product.id === +id);

  const [quantity, setQuantity] = useState<number | null>(1);

  const quantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (+value > 0) {
      dispatch(addToCart(product!.id));
      setQuantity(+value);
    }
  };

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
        <Input
          type={'number'}
          defaultValue={1}
          className={classes.input}
          onChange={quantityChange}
          value={quantity}
        />
        <Button
          disableElevation
          variant={'contained'}
          style={{ marginLeft: 'auto' }}
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
  }),
);

export default CartProduct;
