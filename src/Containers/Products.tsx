import React from 'react';
import { Box, useTheme } from '@material-ui/core';
import { ProductCard } from '../Components';
import { PRODUCTS } from '../Constants';

const Products = () => {
  const theme = useTheme();
  return (
    <Box
      m={theme.spacing(0.5)}
      display={'flex'}
      justifyContent={'space-between'}
      flexWrap={'wrap'}
    >
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Box>
  );
};

export default Products;
