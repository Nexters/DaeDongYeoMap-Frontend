import { makeVar } from '@apollo/client';
import createReactiveVarHooks from '~/util/createReactiveVarHooks';
import type { SpotView } from '~/components/Course/Editor/EditorState';

export enum DraggedStatus {
  Wait,
  Start,
  End,
}

export type DraggedStatusMap = {
  [spotId: string]: DraggedStatus;
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

let draggedSpot: SpotView = null;

export const getDraggedSpot = (): SpotView => draggedSpot;

export const setDraggedSpot = (spot: SpotView): void => {
  draggedSpot = spot;
};
