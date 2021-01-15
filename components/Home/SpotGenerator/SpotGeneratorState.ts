import {
  atom,
  RecoilState,
  selectorFamily,
  RecoilValueReadOnly,
  selector,
  atomFamily,
} from 'recoil';
import getPlace from '../../../lib/apollo/queries/getPlace';

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

export const pageState: RecoilState<number> = atom({
  key: 'pageState',
  default: 1,
});

export const placeState: (
  placeId: string
) => RecoilState<GQL.GetPlace.Data> = atomFamily({
  key: 'placeState',
  default: defaultPlace,
});

export const currentPlaceIdState: RecoilState<string> = atom({
  key: 'currentPlaceIdState',
  default: null,
});

export const placeQuery: (
  placeId: string
) => RecoilValueReadOnly<GQL.GetPlace.Data> = selectorFamily({
  key: 'placeQuery',
  get: (placeId) => async () => {
    if (!placeId) {
      return defaultPlace;
    }
    return await getPlace(placeId);
  },
});

export const currentPlaceQuery = selector({
  key: 'currentPlaceQuery',
  get: ({ get }) => get(placeQuery(get(currentPlaceIdState))),
});
