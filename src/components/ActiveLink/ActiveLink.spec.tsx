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
  const { debug } = render(
    <ActiveLink href="/" activeClassName="active">
      <a>Home</a>
    </ActiveLink>
  )

  debug(); // debug irá gerar um console.log da DOM virtual do jsdom
})