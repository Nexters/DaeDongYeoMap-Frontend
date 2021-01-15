import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql', // TODO: 우리 API 서버 URI로
  cache: new InMemoryCache(),
});

export default client;
