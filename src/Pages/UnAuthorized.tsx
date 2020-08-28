import React from 'react';
import { PublicLayout } from '../Global';

const UnAuthorized: React.FC = () => {
  return (
    <PublicLayout>
      <div data-testid={'unauthorized'}>
        You are not Authorized to visit this Page
      </div>
    </PublicLayout>
  );
};

export default UnAuthorized;
