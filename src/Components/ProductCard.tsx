import React from 'react';
import { Box, Card, Typography, useTheme } from '@material-ui/core';
import { Product } from '../types/Product';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }: Props) => {
  const theme = useTheme();

  return (
    <Box width={'250px'} m={theme.spacing(0.2)}>
      <Card>
        <Typography>{product.title}</Typography>
      </Card>
    </Box>
  );
};

export default ProductCard;
