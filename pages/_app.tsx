import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import apolloClient from '../lib/apollo/client';
import theme from '../styles/theme';
import '../styles/reset.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={apolloClient}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
