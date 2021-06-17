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

describe('ActiveLink component', () => {
  it('renders correctly', () => {
    const { debug, getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )

    // debug(); // debug irá gerar um console.log da DOM virtual do jsdom
    expect(getByText('Home')).toBeInTheDocument();
  })

  it('renders with activeClassName when link is active', () => {
    const { debug, getByText } = render(
      <ActiveLink href="/" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )
    expect(getByText('Home')).toHaveClass('active')
  })

  it('renders without activeClassName when link is not active', () => {
    const { debug, getByText } = render(
      <ActiveLink href="/other-path" activeClassName="active">
        <a>Home</a>
      </ActiveLink>
    )
    expect(getByText('Home')).not.toHaveClass('active')
  })
})
