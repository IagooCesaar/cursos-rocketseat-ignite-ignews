import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { getPrismicClient } from '../../services/prismic';

import Post, { getServerSideProps } from '../../pages/posts/[slug]';
import React from 'react';
import { getSession } from 'next-auth/client';

jest.mock('next-auth/client');

const post = {
  slug: 'my-new-post',
  title: 'My New Post',
  content: '<p>Post content</p>',
  updatedAt: '10 de março'
};


describe("Post page", () => {

  it("Render correctly", () => {
    render(<Post
      post={post}
    />);

    expect(screen.getByText('My New Post')).toBeInTheDocument();
    expect(screen.getByText('Post content')).toBeInTheDocument();
  })

  it('redirects user if no subscription found', async () => {
    const getSessionMocked = mocked(getSession);
    getSessionMocked.mockResolvedValueOnce(null);

    const response = await getServerSideProps({
      params: {
        slug: 'my-new-post',
      }
    } as any);

    expect(response).toEqual(
      expect.objectContaining({
        redirect: {
          destination: '/',
        }
      })
    )
  })
})