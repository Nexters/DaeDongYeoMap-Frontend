import React from 'react';
import * as $ from './TitleView';

type Props = {
  onClickCloseButton?: () => void;
};

const Title: React.FC<Props> = ({ onClickCloseButton }) => {
  const handleClickCloseLayerButton = () => {
    onClickCloseButton();
  };

  return (
    <$.Title>
      <$.Text>스팟 찍기</$.Text>
      <$.CloseLayerButton onClick={handleClickCloseLayerButton} />
    </$.Title>
  );
};

export default Title;
