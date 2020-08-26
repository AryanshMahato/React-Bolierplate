import React from 'react';
import Routes from './Routes';
import { Layout } from './Global';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  // Application Entry Point
  return (
    <Layout>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Layout>
  );
};

export default App;
