import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import { mocked } from 'ts-jest/utils';
// import { useSession } from 'next-auth/client';
import { SubscribeButton } from '.';

jest.mock('next-auth/client', () => {
  return {
    useSession() {
      return [null, false]
    }
  }
})

jest.mock('next-auth/client');

describe('SubscribeButton component', () => {
  it('renders correctly', () => {
    render(
      <SubscribeButton />
    )
    expect(screen.getByText('Subscribe now')).toBeInTheDocument();
  })

  it('redirects user to sign in when not authenticated', () => {
    render(
      <SubscribeButton />
    )
    const subscribeButton = screen.getByText('Subscribe now');
    fireEvent.click(subscribeButton);

  })
});