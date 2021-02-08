import { InMemoryCache } from '@apollo/client';
import merge from 'deep-merge';
import homeTypePolicies from './home';

const cacheOption = merge({}, homeTypePolicies);

export const createCache = (): InMemoryCache => {
  return new InMemoryCache();
};
