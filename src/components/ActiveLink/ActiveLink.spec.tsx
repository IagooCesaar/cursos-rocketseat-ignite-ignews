import React from 'react';
import { render } from '@testing-library/react';

import { ActiveLink } from '.';

jest.mock('next/router', () => {
  return {
    useRouter() {
      return {
        asPath: '/',
      }
    }
  }
})

test('ActiveLink render correctly', () => {
  const { debug, getByText } = render(
    <ActiveLink href="/" activeClassName="active">
      <a>Home</a>
    </ActiveLink>
  )

  // debug(); // debug irá gerar um console.log da DOM virtual do jsdom
  expect(getByText('Home')).toBeInTheDocument();
})

test('ActiveLink render correctly activeClassName', () => {
  const { debug, getByText } = render(
    <ActiveLink href="/" activeClassName="active">
      <a>Home</a>
    </ActiveLink>
  )
  expect(getByText('Home')).toHaveClass('active')
})

test('ActiveLink not render activeClassName', () => {
  const { debug, getByText } = render(
    <ActiveLink href="/other-path" activeClassName="active">
      <a>Home</a>
    </ActiveLink>
  )
  expect(getByText('Home')).not.toHaveClass('active')
})