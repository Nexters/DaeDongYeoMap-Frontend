import { makeVar } from '@apollo/client';
import createReactiveVarHooks from '~/util/createReactiveVarHooks';

export const mapSpots = makeVar<GQL.Spot[]>([]);

export const [
  useMapSpots,
  useMapSpotsSetter,
  useMapSpotsState,
] = createReactiveVarHooks(mapSpots);

export const currentPosition = makeVar({
  lngX: 127.0671244,
  latY: 37.2968082,
});

export const [
  useCurrentPosition,
  useCurrentPositionSetter,
  useCurrentPositionState,
] = createReactiveVarHooks(currentPosition);

export const useIsCustomSpotSetting = makeVar(false);
