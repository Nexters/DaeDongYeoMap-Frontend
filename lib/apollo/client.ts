import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client';
import { useMemo } from 'react';
import cache from './cache';

let apolloClient: ApolloClient<NormalizedCacheObject> = null;

export const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  const client = new ApolloClient({
    ssrMode: !process.browser,
    link: new HttpLink({
      uri: 'https://korean-date-map.herokuapp.com/graphql',
    }),
    cache,
  });

  return client;
};

export const initializeApollo = (
  initialState: NormalizedCacheObject = null
): ApolloClient<NormalizedCacheObject> => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();

    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  if (!process.browser) {
    return _apolloClient;
  }
  if (!apolloClient) {
    apolloClient = _apolloClient;
  }

  return _apolloClient;
};

export const useApollo = (
  initialState?: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);

  return store;
};
