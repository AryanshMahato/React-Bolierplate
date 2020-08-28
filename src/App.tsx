import React from 'react';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  // Application Entry Point
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
