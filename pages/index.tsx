import { useState } from 'react';
import Head from 'next/head';
import SpotGenerator from '../components/Home/SpotGenerator';
import styles from '../styles/Home.module.css';
import MainPage from '../components/Home/MainMapPage/MainPage';

const Home: React.FC = () => {
  // 스팟찍기 레이어를 띄우기 위한 임시 상태 (추후 지도와 연동시 변경)
  const [isShownSpotGenerator, setIsShowSpotGenerator] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>데동여지도 Deji</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MainPage />
      </main>

      {isShownSpotGenerator && <SpotGenerator />}
      <button
        type="button"
        style={{ border: '1px solid #000', padding: '10px 20px' }}
        onClick={() => setIsShowSpotGenerator(!isShownSpotGenerator)}
      >
        스팟찍기 레이어 토글(임시버튼)
      </button>

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
