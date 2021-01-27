import React from 'react';
// import createSpot from '~/lib/apollo/mutations/createSpot';
// import { useRecoilValue, useSetRecoilState } from 'recoil';
// import { spotGeneratorShowState } from '~/components/Home/MainMapPage/MainMapPageState';
// import {
// currentPlaceQuery,
// emojiState,
// currentLatLng,
// } from '~/components/Home/SpotGenerator/SpotGeneratorState';
import * as $ from './AreaFormView';

const AreaForm: React.FC = () => {
  // TODO: 서버쪽 getPlace가 완료되어야 함.
  // const place = useRecoilValue(currentPlaceQuery);
  // const emojiId = useRecoilValue(emojiState);
  // const curLatLng = useRecoilValue(currentLatLng);
  // const setIsShownSpotGenerator = useSetRecoilState(spotGeneratorShowState);

  // const handleClickSubmit = (e) => {
  //   e.preventDefault();
  //   if (emojiId === null || !place.id || curLatLng.lat === null) return;

  //   createSpot(place, emojiId, curLatLng.lat, curLatLng.lng).then((spot) => {
  //     console.log(spot);
  //     setIsShownSpotGenerator(false);
  //     // TODO: 지도에 Spot 렌더링
  //   });
  // };

  return (
    <$.AreaForm>
      <$.FieldSet>
        <$.FieldLabel>누구와 함께 방문하셨나요</$.FieldLabel>
        <$.FieldInputBox>
          <$.InputVisitant placeholder="ex) 전남친, 사랑하는 엄마" />
        </$.FieldInputBox>
      </$.FieldSet>
      <$.FieldSet>
        <$.FieldLabel>장소를 방문한 날짜를 기록해보세요</$.FieldLabel>
        <$.FieldInputBox>
          <$.DateLabel isSelected={false}>01.16.2021</$.DateLabel>
          <$.DatePickerOpenButton />
        </$.FieldInputBox>
      </$.FieldSet>
      <$.SubmitButton>완료하기</$.SubmitButton>
    </$.AreaForm>
  );
};

export default AreaForm;
