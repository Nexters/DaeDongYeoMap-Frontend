import { useMapSpotsSetter, mapSpots } from '~/lib/apollo/vars/home';

// SpotGenerator에서 새로운 스팟이 추가되었을 때 사용할 훅
export const useSpotAdder = () => (spot: GQL.Spot): void => {
  const setMapSpots = useMapSpotsSetter();

  setMapSpots([...mapSpots(), spot]);
};
// SearchPlace에서 새로운 스팟이 검색되었을 때 사용할 훅
export const useSpotRefresher = () => (spots: GQL.Spot[]): void => {
  const setMapSpots = useMapSpotsSetter();

  setMapSpots(spots);
};
