import React from 'react';
import * as $ from './SpotPlaceholderView';

type Props = {
  isPressed?: boolean;
  onContextMenu: () => void;
};

const SpotPlaceholder: React.FC<Props> = ({ isPressed, onContextMenu }) => {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    onContextMenu();
  };

  return (
    <$.SpotPlaceholder isPressed={isPressed} onContextMenu={handleContextMenu}>
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
