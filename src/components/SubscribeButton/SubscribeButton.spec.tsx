import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { signIn } from 'next-auth/client';
import { push } from 'next/router'

import { SubscribeButton } from '.';

jest.mock('next-auth/client', () => {
  return {
    useSession() {
      return [null, false]
    }
  }
})

jest.mock('next/router', () => {
  return {
    push: jest.fn(),
  }
});

describe('SubscribeButton component', () => {
  it('renders correctly', () => {
    render(
      <SubscribeButton />
    )
    expect(screen.getByText('Subscribe now')).toBeInTheDocument();
  })

  it('redirects user to sign in when not authenticated', () => {
    const signInMocked = mocked(signIn);

    render(
      <SubscribeButton />
    )
    const subscribeButton = screen.getByText('Subscribe now');
    fireEvent.click(subscribeButton);
    expect(signInMocked).toHaveBeenCalled();
  })

  it('redirects to posts when user already have a subscription', () => {
    const pushMocked = mocked(push);
    render(<SubscribeButton />);
    const subscribeButton = screen.getByText('Subscribe now');
    fireEvent.click(subscribeButton);
    expect(pushMocked).toHaveBeenCalled();
  })
});