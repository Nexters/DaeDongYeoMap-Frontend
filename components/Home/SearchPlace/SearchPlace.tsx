import React from 'react';
import * as $ from './SearchPlaceView';
import { useIsCustomSpotSetting } from '~/lib/apollo/vars/home';
import { useReactiveVar } from '@apollo/client';

const SearchPlace: React.FC = () => {
  const isCustomSpotSetting = useReactiveVar(useIsCustomSpotSetting);

  const onChangeInput = (e: any) => {
    // TODO;
  };

  const submitValue = (e: any) => {
    e.preventDefault();
    // TODO;
  };

  const handleCustomSpotSetting = (e: any) => {
    e.preventDefault();
    useIsCustomSpotSetting(!isCustomSpotSetting);
  };

  return (
    <$.SearchDiv>
      <$.SearchForm onSubmit={submitValue}>
        <$.TempImg />
        <$.InputField
          type="text"
          name="searchValue"
          placeholder={'장소를 검색하세요'}
          value={''}
          onChange={onChangeInput}
        />
      </$.SearchForm>
      <$.SpotButton onClick={handleCustomSpotSetting}>
        <$.SpotButtonImg />
      </$.SpotButton>
    </$.SearchDiv>
  );
};

export default SearchPlace;
