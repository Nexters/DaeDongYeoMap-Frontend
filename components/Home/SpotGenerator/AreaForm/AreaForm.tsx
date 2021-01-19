import React from 'react';
import createSpot from '~/lib/apollo/mutations/createSpot';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { spotGeneratorShowState } from '~/components/Home/MainMapPage/MainMapPageState';
import {
  currentPlaceQuery,
  emojiState,
  currentLatLng,
} from '~/components/Home/SpotGenerator/SpotGeneratorState';
import * as $ from './AreaFormView';

const AreaForm: React.FC = () => {
  const place = useRecoilValue(currentPlaceQuery);
  const emojiId = useRecoilValue(emojiState);
  const curLatLng = useRecoilValue(currentLatLng);
  const setIsShownSpotGenerator = useSetRecoilState(spotGeneratorShowState);

  const handleClickSubmit = (e) => {
    e.preventDefault();
    if (emojiId === null || !place.id || curLatLng.lat === null) return;

    createSpot(place, emojiId, curLatLng.lat, curLatLng.lng).then((spot) => {
      console.log(spot);
      setIsShownSpotGenerator(false);
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
