import React from 'react';
import Layout from './Layout';
import PublicNavbar from '../Navbars/PublicNavbar';

interface Props {
  children: React.ReactNode;
  hideNavbar?: boolean;
}

const PublicLayout: React.FC<Props> = ({ children, hideNavbar }: Props) => {
  return (
    <Layout>
      {!hideNavbar && <PublicNavbar />}
      {children}
    </Layout>
  );
};

export default PublicLayout;
