import { atom, selector, selectorFamily, RecoilValueReadOnly } from 'recoil';
import placesByKeyword from '~/lib/apollo/queries/placesByKeyword';

const defaultPlace: GQL.GetPlace.Data = {
  id: null,
  place_name: null,
  category_name: null,
  category_group_code: null,
  category_group_name: null,
  phone: null,
  address_name: null,
  road_address_name: null,
  place_url: null,
  distance: null,
  x: null,
  y: null,
};

export const searchPlaceQuery: (
  query: string
) => RecoilValueReadOnly<GQL.GetPlace.Data> = selectorFamily({
  key: 'searchPlaceQuery',
  get: (query) => async () => {
    console.log('들어옴?');
    if (!query) {
      return defaultPlace;
    }
    return await placesByKeyword(query);
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
  get: ({ get }) => get(searchPlaceQuery(get(submitValueState))), //submitValueState에 의존적인 쿼리
});
