import Head from 'next/head'
import { GetStaticProps } from 'next'

import { getPrismicClient } from '../../services/prismic'

import styles from './styles.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monrepo with Lerna & Yarn Workspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monrepo with Lerna & Yarn Workspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monrepo with Lerna & Yarn Workspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creating a Monrepo with Lerna & Yarn Workspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a </p>
          </a>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  return {
    props: {

    }
  }
}