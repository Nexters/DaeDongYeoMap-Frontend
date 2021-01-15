import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://korean-date-map.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});

export default client;
