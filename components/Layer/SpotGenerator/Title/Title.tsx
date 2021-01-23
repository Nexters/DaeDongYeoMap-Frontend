import React from 'react';
import { useResetRecoilState } from 'recoil';
import {
  emojiState,
  currentPlaceIdState,
} from '~/components/Layer/SpotGenerator/SpotGeneratorState';
import * as $ from './TitleView';

type Props = {
  onClickCloseButton?: () => void;
};

const Title: React.FC<Props> = ({ onClickCloseButton }) => {
  const resetPlaceState = useResetRecoilState(currentPlaceIdState);
  const resetEmojiState = useResetRecoilState(emojiState);

  const handleClickCloseLayerButton = () => {
    resetPlaceState();
    resetEmojiState();
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
