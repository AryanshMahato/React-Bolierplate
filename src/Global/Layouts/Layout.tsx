import React from 'react';
import ThemeProvider from '../ThemeProvider';

interface Props {
  children: React.ReactNode;
}

// Layout that will be used internally only, Provides Material UI theme to all the components
const Layout: React.FC<Props> = ({ children }: Props) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Layout;
