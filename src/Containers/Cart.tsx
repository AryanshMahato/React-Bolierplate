import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { ReduxState } from '../types/Redux';
import { CartProduct } from '../Components';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Typography } from '@material-ui/core';
import { Product } from '../types/Product';

interface Props {
  closePopper: () => void;
}

const Cart: React.FC<Props> = ({ closePopper }: Props) => {
  const products = useSelector(
    (state: ReduxState) => state.cart.products,
    shallowEqual,
  );

  // This will not cause re-render
  let total = 0;

  const setTotal = (product: Product) => {
    if (product.quantity === 1) return (total += product.price);

    total += product.price * product.quantity;
  };

  if (products.length)
    return (
      <>
        {products.map((product) => {
          setTotal(product);

          return <CartProduct product={product!} key={product?.id} />;
        })}

        <Typography
          component={'h3'}
          variant={'h5'}
        >{`Total Amount: ${total}`}</Typography>
      </>
    );

  // There is not item in the cart
  return (
    <Alert severity="info">
      <AlertTitle>Cart is Empty</AlertTitle>
      There are cool items to buy —{' '}
      <strong onClick={closePopper}>check it out!</strong>
    </Alert>
  );
};

export default Cart;
