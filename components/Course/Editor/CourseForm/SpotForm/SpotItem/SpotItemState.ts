import { makeVar, ReactiveVar } from '@apollo/client';
import {
  useSpotItemsSetter,
  spotItems as spotItemsState,
} from '~/components/Course/Editor/CourseForm/SpotForm/SpotFormState';
import createReactiveVarHooks, {
  StateSetter,
} from '~/util/createReactiveVarHooks';
import IdGenerator from '~/util/IdGenerator';
import type { SpotView } from '~/components/Course/Editor/EditorState';

/**
 * Placeholder ID Generator
 */
const placholderIdGenerator = IdGenerator.create(
  (index: number) => `ph_${index}`
);

export const createPlacholderData = (): SpotView => ({
  id: placholderIdGenerator.get(),
});

export const checkPlaceholder = (spot: SpotView): boolean => {
  return spot.id[0] === 'p' && spot.id[1] === 'h' && spot.id[2] === '_';
};

export const usePlaceholderAdder = (): (() => void) => {
  const spotItems = spotItemsState();
  const setSpotItems = useSpotItemsSetter();

  return () => setSpotItems([...spotItems, createPlacholderData()]);
};

/**
 * Pressed Spot Id
 */
type SpotId = string;

export const pressedSpotId: ReactiveVar<SpotId> = makeVar<SpotId>(null);

export const [
  usePressedSpotValue,
  usePressedSpotSetter,
  usePressedSpot,
] = createReactiveVarHooks(pressedSpotId);

/**
 * Spot Item Hook
 */
type SpotItemHook = {
  pressedSpotId: SpotId;
  openSpotOptionLayer: StateSetter<SpotId>;
  removeSpotOrPlaceholder: (spotId: SpotId) => void;
  replacePlaceholderToSpot: (index: number, spot: SpotView) => void;
};

export const useSpotItemHook = (): SpotItemHook => {
  const spotItems = spotItemsState();
  const setSpotItems = useSpotItemsSetter();
  const [pressedSpotId, setPressedSpotId] = usePressedSpot();

  const removeSpotOrPlaceholder = (spotId: string) => {
    const filteredSpots: SpotView[] = [];

    for (let i = 0; i < spotItems.length; ++i) {
      if (spotItems[i].id !== spotId) {
        filteredSpots.push(spotItems[i]);
      }
    }

    setPressedSpotId(null);
    setSpotItems(filteredSpots);
  };

  const replacePlaceholderToSpot = (index: number, spot: SpotView) => {
    const nextSpotItems = [...spotItems];

    nextSpotItems.splice(index, 1, spot);
    setSpotItems(nextSpotItems);
  };

  return {
    pressedSpotId,
    openSpotOptionLayer: setPressedSpotId,
    removeSpotOrPlaceholder,
    replacePlaceholderToSpot,
  };
};
