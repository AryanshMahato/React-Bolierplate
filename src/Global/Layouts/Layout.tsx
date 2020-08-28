import React from 'react';
import ThemeProvider from '../ThemeProvider';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Layout;
