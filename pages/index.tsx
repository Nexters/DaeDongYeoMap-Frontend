import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MainPage from '../components/Home/MainMapPage/MainPage';
import DummyToRecoil from '~/components/DummyToRecoil';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>데동여지도 Deji</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MainPage />
      </main>

      <DummyToRecoil />

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
