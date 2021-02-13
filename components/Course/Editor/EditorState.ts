import { makeVar } from '@apollo/client';

export type SpotView = {
  id: string;
  stickerId?: string;
  title?: string;
  partner?: string;
  timestamp?: number;
};

export const draggedSpot = makeVar<SpotView>(null);
