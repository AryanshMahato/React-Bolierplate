import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LoginForm } from '../index';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

describe('Submitting form without any input value', function () {
  it('onSubmit should not be called', async function () {
    const onSubmit = jest.fn();
    const { getByTestId } = render(
      <BrowserRouter>
        <LoginForm onSubmit={onSubmit} />
      </BrowserRouter>,
    );

    const submitButton = getByTestId('submit-button');

    await act(async () => {
      submitButton.click();
    });

    expect(onSubmit).not.toBeCalled();
  });
});

describe('Submitting form with all required input value', function () {
  it('onSubmit should be called 1 time', async function () {
    const onSubmit = jest.fn();
    const { getByTestId } = render(
      <BrowserRouter>
        <LoginForm onSubmit={onSubmit} />
      </BrowserRouter>,
    );

    const usernameField = getByTestId('username');
    const passwordField = getByTestId('password');

    const submitButton = getByTestId('submit-button');

    await act(async () => {
      await userEvent.type(usernameField, 'Aryansh');
      await userEvent.type(passwordField, 'Password');

      submitButton.click();
    });

    expect(onSubmit).toBeCalled();
  });
});

describe('Clicking Signup Link', function () {
  it('should route to SignUp Page', async function () {
    const onSubmit = jest.fn();

    const { getByTestId } = render(
      <BrowserRouter>
        <LoginForm onSubmit={onSubmit} />
      </BrowserRouter>,
    );

    const submitButton = getByTestId('signup-link');

    await act(async () => {
      await userEvent.click(submitButton);
    });

    expect(window.location.pathname).toBe('/signup');
  });
});
