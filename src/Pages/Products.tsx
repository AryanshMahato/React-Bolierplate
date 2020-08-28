import React from 'react';
import { Products } from '../Containers';
import { ProductsLayout } from '../Global';

const ProductsPage: React.FC = () => {
  return (
    <ProductsLayout>
      <Products />
    </ProductsLayout>
  );
};

export default ProductsPage;
