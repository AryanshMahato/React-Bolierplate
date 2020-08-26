import React from 'react';
import Routes from './Routes';
import { Layout } from './Global';

const App: React.FC = () => {
  // Application Entry Point
  return (
    <Layout>
      <Routes />
    </Layout>
  );
};

export default App;
