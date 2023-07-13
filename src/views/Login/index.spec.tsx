import React from 'react';
import userEvent from '@testing-library/user-event';
import singletonRouter from 'next/router';

import { fireEvent, reduxRender, waitFor } from '@/utils/reduxRender';

import Login from '.';

// TODO: Login - Add remaining tests once API integrated.

describe('<Login/>', () => {
  it('should render login', () => {
    const screen = reduxRender(<Login />);
    expect(screen.getAllByText('Login').length).toBeTruthy();
    expect(screen.getByText('"Track Your Carbon Footprint - Log in to EventZero by Huddle Now!"'));
  });

  it('should handle email change', () => {
    const screen = reduxRender(<Login />);

    const emailInput = screen.getByTestId('email-input');

    userEvent.type(emailInput, 'ahsan@gmail.com');
    expect(emailInput).toHaveValue('ahsan@gmail.com');
  });

  it('should handle password change', () => {
    const screen = reduxRender(<Login />);

    const passwordInput = screen.getByTestId('password-input');

    userEvent.type(passwordInput, 'ahsan123');
    expect(passwordInput).toHaveValue('ahsan123');
  });

  it('should handle password show/hide', () => {
    const screen = reduxRender(<Login />);

    const passwordInput = screen.getByTestId('password-input');
    const showHideButton = screen.getByTestId('show-hide-button');

    userEvent.type(passwordInput, 'ahsan123');
    expect(passwordInput).toHaveValue('ahsan123');

    expect(passwordInput).toHaveAttribute('type', 'password');

    fireEvent.click(showHideButton);

    expect(passwordInput).toHaveAttribute('type', 'text');

    fireEvent.click(showHideButton);

    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('should show email required error', async () => {
    const screen = reduxRender(<Login />);

    const passwordInput = screen.getByTestId('password-input');

    userEvent.type(passwordInput, 'ahsan123');
    expect(passwordInput).toHaveValue('ahsan123');

    const submitButton = screen.getByTestId('submit-button');

    fireEvent.click(submitButton);

    await waitFor(() => expect(screen.getByText('Email is required')).toBeInTheDocument());
    expect(screen.queryByText('Password is required')).not.toBeInTheDocument();
  });

  it('should show invalid email error', async () => {
    const screen = reduxRender(<Login />);

    const emailInput = screen.getByTestId('email-input');

    userEvent.type(emailInput, 'ahsan123');
    expect(emailInput).toHaveValue('ahsan123');

    const submitButton = screen.getByTestId('submit-button');

    fireEvent.click(submitButton);

    await waitFor(() => expect(screen.getByText('Please enter a valid email')).toBeInTheDocument());
  });

  it('should show password required error', async () => {
    const screen = reduxRender(<Login />);

    const emailInput = screen.getByTestId('email-input');

    userEvent.type(emailInput, 'ahsan123@gmail.com');
    expect(emailInput).toHaveValue('ahsan123@gmail.com');

    const submitButton = screen.getByTestId('submit-button');

    fireEvent.click(submitButton);

    await waitFor(() => expect(screen.getByText('Password is required')).toBeInTheDocument());
    expect(screen.queryByText('Email is required')).not.toBeInTheDocument();
  });

  it('should handle forget password click', async () => {
    const screen = reduxRender(<Login />);

    fireEvent.click(screen.getByText('Forgot Password?'));

    expect(singletonRouter).toMatchObject({
      asPath: '/forget-password',
    });
  });

  it('should handle signup click', async () => {
    const screen = reduxRender(<Login />);

    fireEvent.click(screen.getByText('Sign Up'));

    expect(singletonRouter).toMatchObject({
      asPath: '/register',
    });
  });
});
