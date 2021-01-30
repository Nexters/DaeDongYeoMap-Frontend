import React from 'react';
import Head from 'next/head';
import { initializeApollo } from '../lib/apollo/client';
import MainPage from '../components/Home/MainMapPage/MainPage';
import styles from '../styles/Home.module.css';
import type { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const apolloClient = initializeApollo();

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1,
  };
};

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>데동여지도 Deji</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{process.browser && <MainPage />}</main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default Home;
