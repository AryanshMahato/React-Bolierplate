import React from 'react';
import { render } from '@testing-library/react';
import { Landing } from '../index';
import { BrowserRouter } from 'react-router-dom';

describe('<Landing />', function () {
  describe('Clicking at Login Button', function () {
    it('should route to Login Page', async function () {
      const { getByTestId } = render(
        <BrowserRouter>
          <Landing />
        </BrowserRouter>,
      );

      // Clicking Login button
      const loginButton = await getByTestId('loginButton');
      loginButton.click();

      expect(window.location.pathname).toBe('/login');
    });
  });

  describe('Clicking Sign Up Button', function () {
    it('should route to Sign Up Page', async function () {
      const { getByTestId } = render(
        <BrowserRouter>
          <Landing />
        </BrowserRouter>,
      );

      // Clicking Sign Up button
      const signUpButton = await getByTestId('signUpButton');
      signUpButton.click();

      expect(window.location.pathname).toBe('/signup');
    });
  });
});
