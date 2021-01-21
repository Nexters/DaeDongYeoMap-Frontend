import React from 'react';
import * as $ from './SearchPlaceView';
import { useRecoilState } from 'recoil';
import { searchValueState } from '../SearchPlace/SearchPlaceState';

const SearchPlace: React.FC = () => {
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);

  const onChangeInput = (e: any) => {
    setSearchValue(e.target.value);
  };

  const submitValue = (e: any) => {
    e.preventDefault();
    if (!searchValue) {
      alert('장소 입력ㄱㄱ');
    } else {
      console.log(searchValue);
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
