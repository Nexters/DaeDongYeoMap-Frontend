import { makeVar } from '@apollo/client';
import createReactiveVarHooks from '~/util/createReactiveVarHooks';
import Storage from '~/lib/storage';
import type { StickerCardRecord } from '~/@types/record.d';

export enum DraggedStatus {
  Wait,
  Start,
  End,
}

export type DraggedStatusMap = {
  [spotId: string]: DraggedStatus;
};

export const candidateSpots = makeVar<StickerCardRecord[]>([]);

export const [
  useCandidateSpots,
  useCandidateSpotsSetter,
  useCandidateSpotsState,
] = createReactiveVarHooks(candidateSpots);

export const useEndSpotsRemover = (): (() => void) => {
  const setCandidateSpots = useCandidateSpotsSetter();

  return () => {
    const spots = candidateSpots();
    const status = draggedStatus();
    const filteredSpots = spots.filter((spot) => {
      const isEnded = status[spot.id] === DraggedStatus.End;

      if (isEnded) {
        Storage.removeStickerCard(spot.id);
      }

      return !isEnded;
    });

    setCandidateSpots(filteredSpots);
  };
};

export const draggedStatus = makeVar<DraggedStatusMap>({});

export const [
  useDraggedStatusValue,
  useDraggedStatusSetter,
  useDraggedStatus,
] = createReactiveVarHooks(draggedStatus);

export const changeStatusToEnd = (spotId: string): void => {
  const setDragStatus = useDraggedStatusSetter();
  const nextStatus = { ...draggedStatus() };

  nextStatus[spotId] = DraggedStatus.End;
  setDragStatus(nextStatus);
};

let draggedSpot: StickerCardRecord = null;

export const getDraggedSpot = (): StickerCardRecord => draggedSpot;

export const setDraggedSpot = (spot: StickerCardRecord): void => {
  draggedSpot = spot;
};
