import { makeVar } from '@apollo/client';

export const useSpotsState = makeVar([]);
export const useCurrentPosition = makeVar({
  lngX: 127.0671244,
  latY: 37.2968082,
});
export const useIsCustomSpotSetting = makeVar(false);
