import React from 'react';
import * as $ from './SpotOptionLayerView';

type Props = {
  onClickDeleteButton: () => void;
};

const SpotOptionLayer: React.FC<Props> = ({ onClickDeleteButton }) => {
  const handleClickDeleteButton = (e: React.MouseEvent) => {
    e.preventDefault();
    onClickDeleteButton();
  };

  return (
    <$.SpotOptionLayer>
      <$.Button onClick={handleClickDeleteButton}>삭제</$.Button>
    </$.SpotOptionLayer>
  );
};

export default SpotOptionLayer;
