import React, { useState, useRef, useEffect } from 'react';
import * as $ from './SearchPlaceView';
import { gql, useLazyQuery } from '@apollo/client';
import { debounce } from 'lodash';

const PLACES_AND_SPOTS_BY_KEYWORDID = gql`
  query placesAndSpotsByKeyword($query: String!, $keyword: String!) {
    places(filters: { query: $query }) {
      id
      place_name
      category_name
      category_group_name
      address_name
      road_address_name
      x
      y
    }
    spots(searchSpotDto: { keyword: $keyword }) {
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

  const debounceFunc = React.useCallback(
    debounce(() => !loading && loadData(), 300),
    [loadData]
  );

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

  const handleClickSpots = (e: React.MouseEvent, x: any, y: any) => {
    e.preventDefault();
    console.log(x, y);
    //TODO: 아폴로에 저장된 현재위치를 x,y로 바꿔서 지도이동시키기
  };

  return (
    <>
      <$.SearchForm onSubmit={submitValue}>
        <$.SearchImg />
        <$.InputField
          type="text"
          name="searchValue"
          placeholder={'데이트 스팟 검색'}
          value={keyword}
          onChange={onChangeInput}
          autoFocus={true}
          autoComplete="off"
        />
      </$.SearchForm>
      <$.SpotButton>
        <$.SpotButtonImg /> 스팟 추가하기
      </$.SpotButton>
      {data && (
        <$.PlacesAndSpots>
          {data &&
            data.places &&
            data.places.slice(0, 7).map(({ id, place_name, x, y }) => (
              <$.PlacesAndSpotsItem key={id}>
                <$.SearchGrayImg />
                <$.SpotsName onClick={(e) => handleClickSpots(e, x, y)}>
                  {place_name}
                </$.SpotsName>
              </$.PlacesAndSpotsItem>
            ))}
          {data &&
            data.spots &&
            data.spots
              .slice(0, 6)
              .map(({ _id, place_name, address_name }) => (
                <$.PlacesAndSpotsItem key={_id}>
                  {place_name}
                </$.PlacesAndSpotsItem>
              ))}
        </$.PlacesAndSpots>
      )}
    </>
  );
};

export default SearchPlace;
