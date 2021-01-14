import React from 'react';
import * as $ from './TitleView';

const Title: React.FC = () => {
  return (
    <$.Title>
      <$.Text>스팟 찍기</$.Text>
      <$.CloseLayerButton />
    </$.Title>
  );
};

export default Title;
