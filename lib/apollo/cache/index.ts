import { InMemoryCache } from '@apollo/client';

export const createCache = (): InMemoryCache => {
  return new InMemoryCache();
};
