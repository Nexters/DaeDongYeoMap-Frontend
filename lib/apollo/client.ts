import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/', // TODO: 우리 API 서버 URI로
  cache: new InMemoryCache(),
});

export default client;
