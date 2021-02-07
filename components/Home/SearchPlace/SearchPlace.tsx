import React, { useState } from 'react';
import * as $ from './SearchPlaceView';

const SearchPlace: React.FC = () => {
  const onChangeInput = (e: any) => {
    // TODO;
  };

  const submitValue = (e: any) => {
    e.preventDefault();

    // TODO;
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
      <$.SpotButton>
        <$.SpotButtonImg />
      </$.SpotButton>
    </$.SearchDiv>
  );
};

export default SearchPlace;
