import React from 'react';
import * as $ from './AddSpotButtonView';

type Props = {
  verticalDashedLine: boolean;
};

const AddSpotButton: React.FC<Props> = ({ verticalDashedLine }) => {
  return (
    <$.AddSpotButton>
      <$.DashedLine vertical={verticalDashedLine} />
      <$.PlusIcon />
      <$.Comment>스팟을 추가해보세요</$.Comment>
    </$.AddSpotButton>
  );
};

export default AddSpotButton;
