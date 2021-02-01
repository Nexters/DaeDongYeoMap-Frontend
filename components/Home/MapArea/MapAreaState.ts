import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { spotsState } from '~/lib/apollo/vars/home';
import { useEffect } from 'react';

const FETCH_ALL_SPOTS = gql`
  {
    getAllSpots {
      id
      emojis
      place_name
      category_name
      category_group_code
      category_group_name
      phone
      address_name
      road_address_name
      place_url
      distance
      x
      y
    }
  }
`;

// Apollo Intro에서 말하고 있는 Interaction Layer 분리
export const useSpotsInitailizer = () => {
  const [fetchAllSpots, { called, loading, data }] = useLazyQuery(
    FETCH_ALL_SPOTS
  );
  useEffect(() => {
    if (data) spotsState(data);
  }, [data, called, loading]);
  return [fetchAllSpots, { loading }];
};
const GET_SPOTS_STATE = gql`
  query GetSpotsState {
    spotsState @client
  }
`;
export const useSpotsState = () => {
  const { data } = useQuery(GET_SPOTS_STATE);
  return data;
};
// SpotGenerator에서 새로운 스팟이 추가되었을 때 사용할 훅
export const useSpotAdder = () => (spot) => {
  spotsState([...spotsState(), spot]);
};
// SearchPlace에서 새로운 스팟이 검색되었을 때 사용할 훅
export const useSpotRefresher = () => (spots) => {
  spotsState(spots);
};
