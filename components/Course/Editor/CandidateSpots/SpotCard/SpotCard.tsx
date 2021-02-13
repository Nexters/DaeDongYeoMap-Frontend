import React from 'react';
import { sticker } from '~/constants/sugar';
import * as $ from './SpotCardView';
import { draggedSpot } from '~/components/Course/Editor/EditorState';
import type { SpotView } from '~/components/Course/Editor/EditorState';
import { DRAG_IDENTIFIER_VALUE, DRAG_KEY } from '~/constants/dom';

type Props = SpotView;

const SpotCard: React.FC<Props> = (props) => {
  const { id, stickerId, title, partner, timestamp } = props;
  const spot: SpotView = { id, stickerId, title, partner, timestamp };
  const StickerIcon = sticker[stickerId] && sticker[stickerId].IconWithSugar;

  const handleDragStart = (e: React.DragEvent): void => {
    draggedSpot(spot);
    e.dataTransfer.setData(DRAG_KEY, DRAG_IDENTIFIER_VALUE);
    e.dataTransfer.effectAllowed = 'move';
  };

  return (
    <$.SpotCard draggable onDragStart={handleDragStart}>
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
