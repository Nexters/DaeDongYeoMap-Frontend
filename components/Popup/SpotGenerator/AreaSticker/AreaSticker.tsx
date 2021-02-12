import React from 'react';
import sugar from '~/constants/sugar';
import {
  useFormStickerState,
  useFormSugar,
} from '~/components/Popup/SpotGenerator/SpotGeneratorState';
import * as $ from './AreaStickerView';
import type { Sticker, Sugar } from '~/constants/sugar';

const AreaSticker: React.FC = () => {
  const selectedSugar: Sugar = useFormSugar();
  const [selectedStickerId, setSelectedStickerId] = useFormStickerState();

  const stickers = sugar[selectedSugar].stickers;
  // @see Flex로 Flexible Grid 정렬을 하기 위한, 더미 아이템 요소를 3n개에 맞게 추가
  const stickersToGrid: Sticker[] = [null, null, null].reduce(
    (stickersToGrid, dummy) => {
      if (stickersToGrid.length % 3 !== 0) stickersToGrid.push(dummy);
      return stickersToGrid;
    },
    stickers
  );

  const handleClickSticker = (e: React.MouseEvent, stickerId: string) => {
    e.preventDefault();

    if (stickerId !== selectedStickerId) {
      setSelectedStickerId(stickerId);
    }
  };

  return (
    <$.AreaSticker>
      <$.StickerList>
        {stickersToGrid.map((sticker: Sticker, i) => {
          if (!sticker) {
            return <$.StickerItem key={`sticker-button-${i}`} />;
          }

          const { IconWithSugar, id } = sticker;

          return (
            <$.StickerItem key={`sticker-button-${i}`}>
              {sticker && (
                <$.StickerButton
                  onClick={(e) => handleClickSticker(e, id)}
                  aria-selected={id === selectedStickerId}
                >
                  <IconWithSugar />
                </$.StickerButton>
              )}
            </$.StickerItem>
          );
        })}
      </$.StickerList>
    </$.AreaSticker>
  );
};

export default AreaSticker;
