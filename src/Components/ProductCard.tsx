import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import { AddToCartFunction, Product } from '../types/Product';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  product: Product;
  addToCart: AddToCartFunction;
}

const ProductCard: React.FC<Props> = ({ product, addToCart }: Props) => {
  const classes = useStyles();

  return (
    <Grid item>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="240"
          image={product.imagePath}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Box display={'flex'} alignItems={'center'}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.title}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{ marginLeft: 'auto' }}
            >
              {product.price}
            </Typography>
          </Box>
          <Typography gutterBottom component="p">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => addToCart(product.id)}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    margin: theme.spacing(3),
  },
}));

export default ProductCard;
