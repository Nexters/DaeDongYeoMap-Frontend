import React from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import {
  emojiState,
  currentPlaceIdState,
} from '~/components/Layer/SpotGenerator/SpotGeneratorState';
import { spotGeneratorShowState } from '~/components/Home/MainMapPage/MainMapPageState';
import * as $ from './TitleView';

const Title: React.FC = () => {
  const setIsShownSpotGenerator = useSetRecoilState(spotGeneratorShowState);
  const resetPlaceState = useResetRecoilState(currentPlaceIdState);
  const resetEmojiState = useResetRecoilState(emojiState);

  const handleClickCloseLayerButton = () => {
    setIsShownSpotGenerator(false);
    resetPlaceState();
    resetEmojiState();
  };

  return (
    <$.Title>
      <$.Text>스팟 찍기</$.Text>
      <$.CloseLayerButton onClick={handleClickCloseLayerButton} />
    </$.Title>
  );
};

export default Title;
