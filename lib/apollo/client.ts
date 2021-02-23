/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client';
import { useMemo } from 'react';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';
import { createCache } from './cache';
import { isBrowser } from '~/util';

let apolloClient: ApolloClient<NormalizedCacheObject> = null;

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

export const createApolloClient = (): ApolloClient<NormalizedCacheObject> => {
  const ssrMode = !isBrowser();
  const client = new ApolloClient({
    ssrMode,
    link: new HttpLink({
      uri: 'https://daedongyeomap-lgeeng2eia-du.a.run.app/graphql',
      credentials: 'same-origin',
    }),
    cache: createCache(),
    connectToDevTools: true,
  });

  return client;
};

export const initializeApollo = (
  initialState: NormalizedCacheObject = null
): ApolloClient<NormalizedCacheObject> => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();
    const data = merge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    _apolloClient.cache.restore(data);
  }

  if (!isBrowser()) return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export const addApolloState = (client, pageProps) => {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
};

export const useApollo = (pageProps) => {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
};
