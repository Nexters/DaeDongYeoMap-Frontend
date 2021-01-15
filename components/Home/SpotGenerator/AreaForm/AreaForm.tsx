import React from 'react';
import createSpot from '../../../../lib/apollo/mutations/createSpot';
import { useRecoilValue } from 'recoil';
import { currentPlaceQuery, emojiState } from '../SpotGeneratorState';
import * as $ from './AreaFormView';

const AreaForm: React.FC = () => {
  const place = useRecoilValue(currentPlaceQuery);
  const emojiId = useRecoilValue(emojiState);
  const handleClickSubmit = (e) => {
    e.preventDefault();
    createSpot(place, emojiId).then((spot) => {
      console.log(spot);
      // TODO: 지도에 Spot 렌더링
    });
  };

  return (
    <$.AreaForm>
      <$.SubmitButton onClick={handleClickSubmit}>완료하기</$.SubmitButton>
    </$.AreaForm>
  );
};

export default AreaForm;
