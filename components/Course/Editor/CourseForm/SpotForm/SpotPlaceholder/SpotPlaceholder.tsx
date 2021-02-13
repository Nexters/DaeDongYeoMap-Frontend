import React from 'react';
import * as $ from './SpotPlaceholderView';

type Props = {
  onContextMenu: () => void;
};

const SpotPlaceholder: React.FC<Props> = ({ onContextMenu }) => {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    onContextMenu();
  };

  return (
    <$.SpotPlaceholder onContextMenu={handleContextMenu}>
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
