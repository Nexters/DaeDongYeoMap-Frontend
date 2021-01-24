import {
  atom,
  RecoilState,
  RecoilValueReadOnly,
  selector,
  selectorFamily,
} from 'recoil';
import type { SerializableParam } from 'recoil';

type RecoilOption = {
  key: string;
};

type Fetcher<ResponseData = any, Variables extends SerializableParam = any> = (
  variables: Variables
) => Promise<ResponseData>;

type LazyQueryRecoils<
  ResponseData = any,
  Variables extends SerializableParam = any
> = {
  query: (varaibles: Variables) => RecoilValueReadOnly<ResponseData>;
  queryVariables: RecoilState<Variables>;
  queryResult: RecoilValueReadOnly<ResponseData>;
};

/**
 * @description
 * Recoil Key Naming Rule
 * - TODO: memoize
 */
const nameQueryKey = (queryKey: string) => queryKey;
const nameCurrentQueryKey = (queryKey: string) => {
  const key = nameQueryKey(queryKey);

  return `Current${key[0].toUpperCase()}${key.substr(1)}`;
};
const nameCurrentStateKey = (queryKey: string) => {
  const key = nameCurrentQueryKey(queryKey);

  return `${key}State`;
};

/**
 * @description
 * fetch 기반으로 lazyQuery 노드들을 생성해주는 Factory 함수
 * - Base Flow : https://recoiljs.org/docs/guides/asynchronous-data-queries#data-flow-graph
 */
const createLazyQueryRecoils = <
  ResponseData,
  Variables extends SerializableParam = any
>(
  option: RecoilOption,
  fetcher: Fetcher<ResponseData, Variables>
): LazyQueryRecoils => {
  const queryKey: string = nameQueryKey(option.key);
  const currentQueryKey = nameCurrentQueryKey(option.key);
  const currentStateKey = nameCurrentStateKey(option.key);

  const query = selectorFamily<ResponseData, Variables>({
    key: queryKey,
    get: (variables: Variables) => async () => {
      try {
        console.log(`<fetch> ${queryKey}`);
        const response: ResponseData = await fetcher(variables);

        return response;
      } catch (err) {
        // TODO: error pipeline
      }

      return null;
    },
  });

  const currentState = atom<Variables>({
    key: currentStateKey,
    default: null,
  });

  const currentQuery = selector<ResponseData>({
    key: currentQueryKey,
    get: ({ get }) => get(query(get(currentState))),
  });

  return {
    query,
    queryVariables: currentState,
    queryResult: currentQuery,
  };
};

export default createLazyQueryRecoils;
