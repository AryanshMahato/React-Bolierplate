import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { ReduxState } from '../types/Redux';
import { CartProduct } from '../Components';
import { Alert, AlertTitle } from '@material-ui/lab';

interface Props {
  closePopper: () => void;
}

const Cart: React.FC<Props> = ({ closePopper }: Props) => {
  const products = useSelector(
    (state: ReduxState) => state.cart.products,
    shallowEqual,
  );

  if (products.length)
    return (
      <>
        {products.map((product) => (
          <CartProduct id={product?.id} key={product?.id} />
        ))}
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
