import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import apolloClient from '../lib/apollo/client';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ApolloProvider>
  );
};

export default App;
