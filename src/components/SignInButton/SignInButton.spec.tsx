import React from 'react';
import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { useSession } from 'next-auth/client';

import { SignInButton } from '.';

jest.mock('next-auth/client');

describe('SignInButton component', () => {
  it('renders correctly when user is not authenticated', () => {
    const useSessionMocked = mocked(useSession);

    render(
      <SignInButton />
    )
    expect(screen.getByText('Sign in with Github')).toBeInTheDocument();
  })

  it('renders correctly when user is authenticated', () => {
    render(
      <SignInButton />
    )
    expect(screen.getByText('Sign in with Github')).toBeInTheDocument();
  })
});