import React from 'react';
import ProductsNavbar from '../Navbars/ProductsNavbar';
import Layout from './Layout';

interface Props {
  children: React.ReactNode;
}

// Layout for Product Page with Navbar
const ProductsLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <Layout>
      <ProductsNavbar />
      {children}
    </Layout>
  );
};

export default ProductsLayout;
