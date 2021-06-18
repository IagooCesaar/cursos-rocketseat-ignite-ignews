import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { stripe } from '../../services/stripe';

import Home, { getStaticProps } from '../../pages';

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

  it('loads initial data', async () => {
    const retrieveStripePriveMocked = mocked(stripe.prices.retrieve);
    retrieveStripePriveMocked.mockResolvedValueOnce({
      id: 'fake-id',
      unit_amount: 1000,
    } as any);
    // console.log
    // {
    //   props: { product: { priceId: 'fake-id', amount: '$10.00' } },
    //   revalidate: 86400
    // }
    const response = await getStaticProps({});
    expect(response).toEqual(
      expect.objectContaining({
        props: { product: { priceId: 'fake-id', amount: '$10.00' } },
      })
    )
  })
})