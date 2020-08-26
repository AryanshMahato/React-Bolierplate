import React from 'react';
import {
  ThemeProvider as ThemeProviderMUI,
  CssBaseline,
} from '@material-ui/core';
import theme from '../Providers/Theme';

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }: Props) => {
  return (
    <ThemeProviderMUI theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProviderMUI>
  );
};

export default ThemeProvider;
