import React from 'react';
import { usePlaceholderAdder } from '../SpotItemState';
import * as $ from './AddSpotButtonView';
import { SpotItem as $SpotItem } from '../SpotItemView';
import type { Props as SpotItemProps } from '../SpotItem';

const AddSpotButton: React.FC<SpotItemProps> = ({ columnIndex }) => {
  const addPlaceholder = usePlaceholderAdder();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    addPlaceholder();
  };

  return (
    <$SpotItem>
      <$.AddSpotButton onClick={handleClick}>
        <$.DashedLine vertical={columnIndex % 3 === 0} />
        <$.PlusIcon />
        <$.Comment>스팟을 추가해보세요</$.Comment>
      </$.AddSpotButton>
    </$SpotItem>
  );
};

export default AddSpotButton;
