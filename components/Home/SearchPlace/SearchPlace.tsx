import React, { useState, useRef, useEffect } from 'react';
import * as $ from './SearchPlaceView';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { debounce } from 'lodash';
import { useReactiveVar } from '@apollo/client';
import {
  useCurrentPosition,
  useIsCustomSpotSetting,
} from '~/lib/apollo/vars/home';

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

// const List = ({ searchKeyword, query }) => {
//   const { loading, error, data: enterPlacesAndSpots } = useQuery(
//     PLACES_AND_SPOTS_BY_KEYWORDID,
//     {
//       variables: { query, keyword: searchKeyword },
//       onError(error) {
//         console.log('error', error);
//       },
//     }
//   );

//   console.log('data', enterPlacesAndSpots);
//   console.log('type', typeof enterPlacesAndSpots);
//   if (enterPlacesAndSpots && enterPlacesAndSpots.getPlacesByKeyword) {
//     console.log('제발', enterPlacesAndSpots.getPlacesByKeyword);
//   }
//   if (enterPlacesAndSpots && enterPlacesAndSpots.getSpotsByKeyword) {
//     console.log('제발22', enterPlacesAndSpots.getSpotsByKeyword);
//   }

//   return <></>;
// };

const SearchPlace: React.FC = () => {
  const isCustomSpotSetting = useReactiveVar(useIsCustomSpotSetting);
  const [keyword, setKeyword] = useState('');
  const query = keyword;
  const [isClicked, setIsClicked] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [loadData, { loading, data: placesAndSpotsByKeyword }] = useLazyQuery(
    PLACES_AND_SPOTS_BY_KEYWORDID,
    {
      variables: { query, keyword },
      onError(error) {
        console.log('error', error);
      },
    }
  );
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
    loadData();
    console.log(placesAndSpotsByKeyword);
    setSearchKeyword(keyword);
    setIsClicked(false);
    // setKeyword('');
  };

  const clickForm = (e: any) => {
    setIsClicked(true);
  };

  const handleClickSpots = (e: React.MouseEvent, x: number, y: number) => {
    e.preventDefault();
    console.log(y, x);
    const currentPosition = { latY: y, lngX: x };
    useCurrentPosition(currentPosition);
    const position = useCurrentPosition();
    console.log(position); //위치 상태 변경 확인
    //TODO: 지도 이동
  };

  const handleCustomSpotSetting = (e: any) => {
    e.preventDefault();
    useIsCustomSpotSetting(!isCustomSpotSetting);
  };

  return (
    <>
      <$.SearchForm onClick={clickForm} onSubmit={submitValue}>
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
      <$.SpotButton onClick={handleCustomSpotSetting}>
        <$.SpotButtonImg /> 스팟 추가하기
      </$.SpotButton>
      {isClicked && placesAndSpotsByKeyword && (
        <$.PlacesAndSpots>
          {placesAndSpotsByKeyword &&
            placesAndSpotsByKeyword.places &&
            placesAndSpotsByKeyword.places
              .slice(0, 7)
              .map(({ id, place_name, x, y }) => (
                <$.PlacesAndSpotsItem key={id}>
                  <$.SearchGrayImg />
                  <$.SpotsName onClick={(e) => handleClickSpots(e, x, y)}>
                    {place_name}
                  </$.SpotsName>
                </$.PlacesAndSpotsItem>
              ))}
          {placesAndSpotsByKeyword &&
            placesAndSpotsByKeyword.spots &&
            placesAndSpotsByKeyword.spots
              .slice(0, 6)
              .map(({ _id, place_name, address_name }) => (
                <$.PlacesAndSpotsItem key={_id}>
                  {place_name}
                </$.PlacesAndSpotsItem>
              ))}
        </$.PlacesAndSpots>
      )}
      {searchKeyword && (
        <$.EnterDiv onClick={(e) => setIsClicked(false)}>
          <$.CustomBtnDiv>
            <$.CustomBtn>추천 스팟</$.CustomBtn>
            <$.CustomBtn>커스텀 스팟</$.CustomBtn>
          </$.CustomBtnDiv>
          <$.SearchContainer>
            {placesAndSpotsByKeyword &&
              placesAndSpotsByKeyword.places &&
              placesAndSpotsByKeyword.places.map(
                ({
                  id,
                  place_name,
                  address_name,
                  category_group_name,
                  x,
                  y,
                }) => (
                  <$.searchedSpots
                    key={id}
                    onClick={(e) => handleClickSpots(e, x, y)}
                  >
                    <$.SpotImg></$.SpotImg>
                    <$.SpotsInfo>
                      <$.SpotsNameAndCategory>
                        <$.SpotsName>{place_name}</$.SpotsName>
                        <$.SpotsCategory>{category_group_name}</$.SpotsCategory>
                      </$.SpotsNameAndCategory>
                      <$.SpotsAddress>{address_name}</$.SpotsAddress>
                    </$.SpotsInfo>
                  </$.searchedSpots>
                )
              )}
            {placesAndSpotsByKeyword &&
              placesAndSpotsByKeyword.places &&
              placesAndSpotsByKeyword.spots.map(
                ({
                  id,
                  place_name,
                  address_name,
                  category_group_name,
                  x,
                  y,
                }) => (
                  <$.searchedSpots
                    key={id}
                    onClick={(e) => handleClickSpots(e, x, y)}
                  >
                    <$.SpotImg></$.SpotImg>
                    <$.SpotsName>{place_name}</$.SpotsName>
                    <$.SpotsCategory>{category_group_name}</$.SpotsCategory>
                  </$.searchedSpots>
                )
              )}
          </$.SearchContainer>
        </$.EnterDiv>
      )}
    </>
  );
};
export default SearchPlace;
