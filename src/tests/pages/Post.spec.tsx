import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { getPrismicClient } from '../../services/prismic';

import Post, { getServerSideProps } from '../../pages/posts/[slug]';
import React from 'react';

jest.mock('../../services/prismic');

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

  // it('loads initial data', async () => {
  //   const getPrismicClientMocked = mocked(getPrismicClient);

  //   getPrismicClientMocked.mockReturnValueOnce({
  //     query: jest.fn().mockResolvedValueOnce({
  //       results: [
  //         {
  //           uid: 'my-new-post',
  //           data: {
  //             title: [
  //               { type: 'heading', text: 'My New Post' },
  //             ],
  //             content: [
  //               { type: 'paragraph', text: 'Post excerpt' }
  //             ],
  //           },
  //           last_publication_date: '04-01-2021',
  //         }
  //       ]
  //     }),
  //   } as any);
  //   const response = await getStaticProps({});
  //   expect(response).toEqual(
  //     expect.objectContaining({
  //       props: {
  //         posts: [{
  //           slug: 'my-new-post',
  //           title: 'My New Post',
  //           excerpt: 'Post excerpt',
  //           updatedAt: '01 de abril de 2021'
  //         }]
  //       },
  //     })
  //   )
  // })
})