import React from 'react';
import * as $ from './AddSpotButtonView';

type Props = {
  verticalDashedLine: boolean;
  onClick: (e: React.MouseEvent) => void;
};

const AddSpotButton: React.FC<Props> = ({ verticalDashedLine, onClick }) => {
  return (
    <$.AddSpotButton onClick={onClick}>
      <$.DashedLine vertical={verticalDashedLine} />
      <$.PlusIcon />
      <$.Comment>스팟을 추가해보세요</$.Comment>
    </$.AddSpotButton>
  );
};

export default AddSpotButton;
