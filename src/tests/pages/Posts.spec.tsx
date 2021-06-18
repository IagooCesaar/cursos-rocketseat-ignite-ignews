import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { stripe } from '../../services/stripe';

import Posts, { getStaticProps } from '../../pages/posts';
import React from 'react';

const posts = [
  { slug: 'my-new-post', title: 'My New Post', excerpt: 'Post excerpt', updatedAt: '10 de março' },
]

describe("Posts page", () => {

  it("Render correctly", () => {
    render(<Posts
      posts={posts}
    />);

    expect(screen.getByText('My New Post')).toBeInTheDocument();
  })

  // it('loads initial data', async () => {
  //   const retrieveStripePriveMocked = mocked(stripe.prices.retrieve);
  //   retrieveStripePriveMocked.mockResolvedValueOnce({
  //     id: 'fake-id',
  //     unit_amount: 1000,
  //   } as any);
  //   const response = await getStaticProps({});
  //   expect(response).toEqual(
  //     expect.objectContaining({
  //       props: { product: { priceId: 'fake-id', amount: '$10,00' } },
  //     })
  //   )
  // })
})