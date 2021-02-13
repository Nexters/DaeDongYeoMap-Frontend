import React from 'react';
import { CLASSNAME_COURSE_EDITOR_SPOT } from '~/constants/dom';
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
    <$.SpotOptionLayer className={CLASSNAME_COURSE_EDITOR_SPOT}>
      <$.Button onClick={handleClickDeleteButton}>삭제</$.Button>
    </$.SpotOptionLayer>
  );
};

export default SpotOptionLayer;
