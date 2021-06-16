import React from 'react';
import { render } from '@testing-library/react';

import { ActiveLink } from '.';

test('ActiveLink render correctly', () => {
  render(
    <ActiveLink href="/" activeClassName="active">
      <a>Home</a>
    </ActiveLink>
  )
})