import React from 'react';
import { render } from '@testing-library/react';
import { PrivateRoute } from '../index';
import { BrowserRouter } from 'react-router-dom';

const MockComponent = jest.fn(() => <div>Mock Component</div>);

describe('<PrivateRoute />', function () {
  describe('Rendering Component while being unauthorized', function () {
    it('Mock Component Should not be called', async function () {
      // Setting idToken as falsy to replicate unauthorized state
      localStorage.setItem('idToken', '');
      render(
        <BrowserRouter>
          <PrivateRoute component={MockComponent} />
        </BrowserRouter>,
      );

      expect(MockComponent).not.toBeCalled();
    });
  });

  describe('Rendering Component while being unauthorized', function () {
    it('should get Element as test-id of authorized', async function () {
      // Setting idToken as truthy to replicate unauthorized state
      localStorage.setItem('idToken', 'token');

      render(
        <BrowserRouter>
          <PrivateRoute component={MockComponent} />,
        </BrowserRouter>,
      );

      expect(MockComponent).toBeCalled();
    });
  });
});
