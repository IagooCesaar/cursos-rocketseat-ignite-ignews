import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { stripe } from '../../services/stripe';

import Home from '../../pages';

jest.mock('next/router')
jest.mock('next-auth/client', () => {
  return {
    useSession: () => [null, false],
  }
})
jest.mock('../../services/stripe')

describe("Home page", () => {

  it("Render correctly", () => {
    render(<Home
      product={{
        priceId: 'fake-price-id',
        amount: 'R$10,00',
      }}
    />)

    expect(screen.getByText('for R$10,00 month')).toBeInTheDocument();

    expect(screen.getByText(/R\$10,00/i)).toBeInTheDocument();
  })

  it('loads initial data', () => {
    const stripeMocked = mocked(stripe);
  })
})