import React, { useState, useRef, useEffect } from 'react';
import * as $ from './SearchPlaceView';
import { gql, useLazyQuery } from '@apollo/client';
import { debounce } from 'lodash';

const PLACES_AND_SPOTS_BY_KEYWORDID = gql`
  query placesAndSpotsByKeyword($query: String!, $keyword: String!) {
    getPlacesByKeyword(filters: { query: $query }) {
      id
      place_name
      category_name
      category_group_name
      address_name
      road_address_name
      x
      y
    }
    getSpotsByKeyword(keyword: $keyword) {
      _id
      place_name
      category_name
      category_group_name
      address_name
      road_address_name
      x
      y
    }
  }
`;

const SearchPlace: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const query = keyword;
  const [loadData, { called, loading, data }] = useLazyQuery(
    PLACES_AND_SPOTS_BY_KEYWORDID,
    {
      variables: { query, keyword },
      onError(error) {
        console.log('error', error);
      },
    }
  );
  console.log('data', data);
  console.log('type', typeof data);
  if (data && data.getPlacesByKeyword) {
    console.log('제발', data.getPlacesByKeyword);
  }
  if (data && data.getSpotsByKeyword) {
    console.log('제발22', data.getSpotsByKeyword);
  }

  const debounceFunc = React.useCallback(debounce(loadData), [loadData]);

  const onChangeInput = React.useCallback(
    (e: any) => {
      e.preventDefault();
      setKeyword(e.target.value);
      debounceFunc([loadData]);
    },
    [debounceFunc]
  );

  const submitValue = (e: any) => {
    e.preventDefault();
  };

  return (
    <$.ParentDiv>
      <$.SearchDiv>
        <$.SearchForm onSubmit={submitValue}>
          <$.TempImg />
          <$.InputField
            type="text"
            name="searchValue"
            placeholder={'장소를 검색하세요'}
            value={keyword}
            onChange={onChangeInput}
            autoFocus={true}
            autoComplete="off"
          />
        </$.SearchForm>
        <$.SpotButton>
          <$.SpotButtonImg />
        </$.SpotButton>
      </$.SearchDiv>
      {data && (
        <$.PlacesAndSpots>
          <$.Places>추천 스팟</$.Places>
          {data &&
            data.getPlacesByKeyword &&
            data.getPlacesByKeyword
              .slice(0, 2)
              .map(({ id, place_name, address_name }) => (
                <$.PlacesAndSpotsItem key={id}>
                  {place_name}
                  <$.AddressDiv>{address_name}</$.AddressDiv>
                </$.PlacesAndSpotsItem>
              ))}
          <$.Spots>다른 사용자가 직접 등록했어요</$.Spots>
          {data &&
            data.getSpotsByKeyword &&
            data.getSpotsByKeyword
              .slice(0, 2)
              .map(({ _id, place_name, address_name }) => (
                <$.PlacesAndSpotsItem key={_id}>
                  {place_name}
                  <$.AddressDiv>{address_name}</$.AddressDiv>
                </$.PlacesAndSpotsItem>
              ))}
        </$.PlacesAndSpots>
      )}
    </$.ParentDiv>
  );
};

export default SearchPlace;
