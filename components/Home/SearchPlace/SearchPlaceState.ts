import { atom, selector, selectorFamily, RecoilValueReadOnly } from 'recoil';
import placesAndSpotsByKeyword from '~/lib/apollo/queries/placesAndSpotsByKeyword';

export const getPlacesAndSpotsQuery: (
  query: string
) => RecoilValueReadOnly<GQL.GetPlacesAndSpots.Data> = selectorFamily({
  key: 'getPlacesAndSpotsQuery',
  get: (query) => async () => {
    console.log('들어옴?');
    if (!query) {
      return { places: [], spots: [] };
    }
    return placesAndSpotsByKeyword(query);
  },
});

export const searchValueState = atom({
  key: 'searchValueState',
  default: '',
});

export const submitValueState = atom({
  key: 'submitValueState',
  default: '',
});

export const submitValueQuery = selector({
  key: 'submitValueQuery',
  get: ({ get }) => get(getPlacesAndSpotsQuery(get(submitValueState))), //submitValueState에 의존적인 쿼리
});
