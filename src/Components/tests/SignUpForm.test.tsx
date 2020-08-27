import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SignUpForm } from '../index';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

describe('Submitting form without any input value', function () {
  it('onSubmit should not be called', async function () {
    const onSubmit = jest.fn();
    const { getByTestId } = render(
      <BrowserRouter>
        <SignUpForm onSubmit={onSubmit} />
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
        <SignUpForm onSubmit={onSubmit} />
      </BrowserRouter>,
    );

    const nameField = getByTestId('name');
    const emailField = getByTestId('email');
    const passwordField = getByTestId('password');
    const confirmPasswordField = getByTestId('confirmPassword');

    const submitButton = getByTestId('submit-button');

    await act(async () => {
      await userEvent.type(nameField, 'Aryansh');
      await userEvent.type(emailField, 'aryansh@gmail.com');
      await userEvent.type(passwordField, 'Password');
      await userEvent.type(confirmPasswordField, 'Password');

      submitButton.click();
    });

    expect(onSubmit).toBeCalled();
  });
});

describe('Clicking Login Link', function () {
  it('should route to SignUp Page', async function () {
    const onSubmit = jest.fn();

    const { getByTestId } = render(
      <BrowserRouter>
        <SignUpForm onSubmit={onSubmit} />
      </BrowserRouter>,
    );

    const submitButton = getByTestId('login-link');

    await act(async () => {
      await userEvent.click(submitButton);
    });

    expect(window.location.pathname).toBe('/login');
  });
});
