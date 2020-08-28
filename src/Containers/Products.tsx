import React from 'react';
import { Box } from '@material-ui/core';
import { ProductCard } from '../Components';
import { PRODUCTS } from '../Constants';
import { AddToCartFunction } from '../types/Product';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Store/Actions/Cart';

const Products = () => {
  const dispatch = useDispatch();

  const addToCartClicked: AddToCartFunction = (productId) => {
    dispatch(addToCart(productId));
  };

  return (
    <Box justifyContent={'center'} display={'flex'} flexWrap={'wrap'}>
      {PRODUCTS.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCartClicked}
        />
      ))}
    </Box>
  );
};

export default Products;
