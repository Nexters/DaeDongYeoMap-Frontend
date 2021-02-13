import React from 'react';
import { sticker } from '~/constants/sugar';
import * as $ from './SpotCardView';
import { DRAG_IDENTIFIER_VALUE, DRAG_KEY } from '~/constants/dom';
import { DraggedStatus, setDraggedSpot } from '../CandidateSpotsState';
import type { SpotView } from '~/components/Course/Editor/EditorState';

type Props = SpotView & {
  status: DraggedStatus;
};

const SpotCard: React.FC<Props> = (props) => {
  const { status, id, stickerId, title, partner, timestamp } = props;
  const spot: SpotView = { id, stickerId, title, partner, timestamp };

  const StickerIcon = sticker[stickerId] && sticker[stickerId].IconWithSugar;
  const isDraggable = status === DraggedStatus.Wait;

  const handleDragStart = (e: React.DragEvent): void => {
    setDraggedSpot(spot);
    e.dataTransfer.setData(DRAG_KEY, DRAG_IDENTIFIER_VALUE);
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <$.SpotCard draggable={isDraggable} onDragStart={handleDragStart}>
      <$.AreaSticker>
        <StickerIcon width="72" height="72" />
      </$.AreaSticker>
      <$.AreaDescription>
        <$.SpotTitle>{title}</$.SpotTitle>
        <$.SpotInfo>
          <$.Partner>{partner}</$.Partner>
          <$.Timestamp>{timestamp}</$.Timestamp>
        </$.SpotInfo>
      </$.AreaDescription>
    </$.SpotCard>
  );
};

export default SpotCard;
