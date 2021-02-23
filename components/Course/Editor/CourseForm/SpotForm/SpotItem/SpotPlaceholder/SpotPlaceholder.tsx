import React from 'react';
import {
  changeStatusToEnd,
  getDraggedSpot,
} from '~/components/Course/Editor/CandidateSpots/CandidateSpotsState';
import { DRAG_IDENTIFIER_VALUE, DRAG_KEY } from '~/constants/dom';
import SpotOptionLayer from '~/components/Course/Editor/CourseForm/SpotForm/SpotItem/SpotOptionLayer';
import { useSpotItemHook } from '../SpotItemState';
import * as $ from './SpotPlaceholderView';
import {
  SpotItem as $SpotItem,
  SpotOrder as $SpotOrder,
  SpotCard as $SpotCard,
} from '../SpotItemView';
import type { StickerCardRecord } from '~/@types/record.d';
import type { Props as SpotItemProps } from '../SpotItem';

const SpotPlaceholder: React.FC<SpotItemProps> = ({ item }) => {
  const {
    pressedSpotId,
    openSpotOptionLayer,
    removeSpotOrPlaceholder,
    replacePlaceholderToSpot,
  } = useSpotItemHook();
  const {
    order,
    itemIndex,
    data: { id },
  } = item;

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    openSpotOptionLayer(id);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.getData(DRAG_KEY) !== DRAG_IDENTIFIER_VALUE) {
      return;
    }

    const spot: StickerCardRecord = getDraggedSpot();

    replacePlaceholderToSpot(itemIndex, spot);
    changeStatusToEnd(spot.id);
  };

  return (
    <$SpotItem>
      <$SpotOrder>{order}</$SpotOrder>
      <$SpotCard>
        <$.SpotPlaceholder
          isPressed={pressedSpotId === id}
          onContextMenu={handleContextMenu}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <$.AreaSticker>
            <$.StickerPlaceholder />
          </$.AreaSticker>
          <$.AreaDescription>
            <$.Description>스팟을 드래그하여 등록해보세요</$.Description>
          </$.AreaDescription>
        </$.SpotPlaceholder>
      </$SpotCard>
      {pressedSpotId === id && (
        <SpotOptionLayer
          onClickDeleteButton={() => {
            removeSpotOrPlaceholder(id);
          }}
        />
      )}
    </$SpotItem>
  );
};

export default SpotPlaceholder;
