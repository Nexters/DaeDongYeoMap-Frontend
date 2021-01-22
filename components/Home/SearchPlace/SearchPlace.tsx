import React from 'react';
import * as $ from './SearchPlaceView';
import { useRecoilState, useSetRecoilState, useRecoilValue } from 'recoil';
import {
  searchValueState,
  submitValueState,
  submitValueQuery,
} from '../SearchPlace/SearchPlaceState';

const SearchPlace: React.FC = () => {
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);
  const submit = useSetRecoilState(submitValueState);
  const Places = useRecoilValue(submitValueQuery);

  const onChangeInput = (e: any) => {
    setSearchValue(e.target.value);
  };

  const submitValue = (e: any) => {
    e.preventDefault();
    if (!searchValue) {
      alert('장소를 입력해주세요!');
    } else {
      submit(searchValue);
      console.log(Places);
    }
  };

  return (
    <$.SearchDiv>
      <$.SearchForm onSubmit={submitValue}>
        <$.TempImg />
        <$.InputField
          type="text"
          name="searchValue"
          placeholder={'장소를 검색하세요'}
          value={searchValue}
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
