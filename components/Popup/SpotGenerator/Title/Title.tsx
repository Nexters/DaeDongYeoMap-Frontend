import React from 'react';
import * as $ from './TitleView';
import { usePopupCloser } from '~/lib/apollo/hooks/usePopup';

const Title: React.FC = () => {
  const closePopup = usePopupCloser();

  const handleClickCloseLayerButton = (e) => {
    e.preventDefault();
    closePopup();
  };

  return (
    <$.Title>
      <$.Text>스팟 찍기</$.Text>
      <$.CloseLayerButton onClick={handleClickCloseLayerButton} />
    </$.Title>
  );
};

export default Title;
