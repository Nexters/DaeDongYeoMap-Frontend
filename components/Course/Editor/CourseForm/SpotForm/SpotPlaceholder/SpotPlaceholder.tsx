import React from 'react';
import * as $ from './SpotPlaceholderView';

const SpotPlaceholder: React.FC = () => {
  return (
    <$.SpotPlaceholder>
      <$.AreaSticker>
        <$.StickerPlaceholder />
      </$.AreaSticker>
      <$.AreaDescription>
        <$.Description>스팟을 드래그하여 등록해보세요</$.Description>
      </$.AreaDescription>
    </$.SpotPlaceholder>
  );
};

export default SpotPlaceholder;
