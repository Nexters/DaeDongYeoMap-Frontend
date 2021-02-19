import React from 'react';
import { sticker } from '~/constants/sugar';
import * as $ from './SpotCardView';
import {
  SpotItem as $SpotItem,
  SpotOrder as $SpotOrder,
  SpotCard as $SpotCard,
} from '../SpotItemView';
import { useSpotItemHook } from '../SpotItemState';
import SpotOptionLayer from '~/components/Course/Editor/CourseForm/SpotForm/SpotItem/SpotOptionLayer';
import type { Props as SpotItemProps } from '../SpotItem';
import { formatDate } from '~/util';

const SpotCard: React.FC<SpotItemProps> = ({
  item: {
    order,
    data: { id, stickerId, title, partner, timestamp },
  },
}) => {
  const {
    pressedSpotId,
    openSpotOptionLayer,
    removeSpotOrPlaceholder,
  } = useSpotItemHook();
  const StickerIcon = sticker[stickerId] && sticker[stickerId].IconWithSugar;

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    openSpotOptionLayer(id);
  };

  return (
    <$SpotItem>
      <$SpotOrder>{order}</$SpotOrder>
      <$SpotCard>
        <$.SpotCard
          isPressed={pressedSpotId === id}
          onContextMenu={handleContextMenu}
        >
          <$.AreaSticker>
            <StickerIcon width="72" height="72" />
          </$.AreaSticker>
          <$.AreaDescription>
            <$.SpotTitle>{title}</$.SpotTitle>
            <$.SpotInfo>
              <$.Partner>{partner}</$.Partner>
              <$.Timestamp>{formatDate(timestamp, true)}</$.Timestamp>
            </$.SpotInfo>
          </$.AreaDescription>
        </$.SpotCard>
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

export default SpotCard;
