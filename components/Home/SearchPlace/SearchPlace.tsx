import React, { useState, useRef, useEffect } from 'react';
import * as $ from './SearchPlaceView';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
import { debounce } from 'lodash';
import { useReactiveVar } from '@apollo/client';
import {
  useCurrentPosition,
  useIsCustomSpotSetting,
} from '~/lib/apollo/vars/home';

//TODO: 스팟 클릭시 지도 이동
const PLACES_AND_SPOTS_BY_KEYWORDID = gql`
  query placesAndSpotsByKeyword(
    $query: String!
    $keyword: String!
    $X: Float
    $Y: Float
    $page: Int
  ) {
    places(filters: { query: $query, x: $X, y: $Y, page: $page }) {
      pageInfo {
        total_count
        is_end
        cur_page
      }
      places {
        id
        place_name
        category_name
        category_group_name
        address_name
        road_address_name
        x
        y
      }
    }
    spots(searchSpotDto: { keyword: $keyword, x: $X, y: $Y }) {
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

const buttons = [
  { key: 'recommend', label: '추천 스팟' },
  { key: 'custom', label: '커스텀 스팟' },
];

const SearchPlace: React.FC = () => {
  const isCustomSpotSetting = useReactiveVar(useIsCustomSpotSetting);
  const [keyword, setKeyword] = useState('');
  const query = keyword;
  const [isClicked, setIsClicked] = useState(false);
  const [isEnter, setIsEnter] = useState(false);
  const [selectedSpot, setSelectedSpot] = useState('recommend');
  const [searchKeyword, setSearchKeyword] = useState('');
  const myPosition = useCurrentPosition();
  console.log(myPosition, '내 위치');
  const X = myPosition.lngX;
  const Y = myPosition.latY;
  console.log(X, 'x');
  console.log(Y, 'y');
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState(0);
  let nums = [1, 2, 3, 4, 5];
  let pages = nums.map((num) => 5 * pagination + num);
  const [loadData, { loading, data: placesAndSpotsByKeyword }] = useLazyQuery(
    PLACES_AND_SPOTS_BY_KEYWORDID,
    {
      variables: { query, keyword, X, Y, page },
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
    setSearchKeyword(keyword);
    setIsClicked(false);
    setIsEnter(true);
    // setKeyword('');
  };

  const clickForm = (e: any) => {
    setIsClicked(true);
  };

  const handleClickSpots = (e: React.MouseEvent, x: number, y: number) => {
    e.preventDefault();
    console.log(y, x);
    myPosition.latY = y;
    myPosition.lngX = x;
    // useCurrentPosition({ latY: y, lngX: x });
    console.log(myPosition, '변경된 위치');
    // const selectedPosition = useCurrentPosition();
    // console.log(selectedPosition, '변경된 위치'); //위치 상태 변경 확인
    //TODO: 지도 이동
  };

  const handleCustomSpotSetting = (e: any) => {
    e.preventDefault();
    useIsCustomSpotSetting(!isCustomSpotSetting);
  };

  const handleClickSpotBtn = (e: React.MouseEvent, key: string) => {
    e.preventDefault();
    setSelectedSpot(key);
  };

  if (placesAndSpotsByKeyword) {
    console.log(placesAndSpotsByKeyword);
  }

  return (
    <>
      <$.SearchForm onClick={clickForm} onSubmit={submitValue}>
        <$.SearchIcon />
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
        <$.SpotButtonImg />
        <$.SpotButtonDiv>스팟 추가하기</$.SpotButtonDiv>
      </$.SpotButton>
      {isClicked && placesAndSpotsByKeyword && (
        <$.PlacesAndSpots>
          {placesAndSpotsByKeyword &&
            placesAndSpotsByKeyword.places.places &&
            placesAndSpotsByKeyword.places.places
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
      {isEnter && searchKeyword && (
        <>
          <$.EnterDiv onClick={(e) => setIsClicked(false)}>
            <$.CustomBtnDiv>
              {buttons.map(({ key, label }) => {
                console.log(key == selectedSpot, key);
                return (
                  <$.CustomBtn
                    key={key}
                    spot-selected={key === selectedSpot}
                    onClick={(e) => handleClickSpotBtn(e, key)}
                  >
                    {label}
                  </$.CustomBtn>
                );
              })}
            </$.CustomBtnDiv>
            <$.SearchContainer>
              {placesAndSpotsByKeyword &&
                placesAndSpotsByKeyword.places.places &&
                placesAndSpotsByKeyword.places.places
                  .slice(0, 10)
                  .map(
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
                            <$.SpotsCategory>
                              {category_group_name}
                            </$.SpotsCategory>
                          </$.SpotsNameAndCategory>
                          <$.SpotsAddress>{address_name}</$.SpotsAddress>
                        </$.SpotsInfo>
                      </$.searchedSpots>
                    )
                  )}
              {placesAndSpotsByKeyword &&
                placesAndSpotsByKeyword.spots &&
                placesAndSpotsByKeyword.spots
                  .slice(0, 0)
                  .map(
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
                            <$.SpotsCategory>
                              {category_group_name}
                            </$.SpotsCategory>
                          </$.SpotsNameAndCategory>
                          <$.SpotsAddress>{address_name}</$.SpotsAddress>
                        </$.SpotsInfo>
                      </$.searchedSpots>
                    )
                  )}
              {placesAndSpotsByKeyword &&
                placesAndSpotsByKeyword.places.length == 0 &&
                placesAndSpotsByKeyword.spots.length == 0 && (
                  <$.NoSpotsContainer>
                    <$.NoSpots key={keyword}>
                      {keyword} 검색 결과가 없어요.
                    </$.NoSpots>
                    <$.SearchAgain>
                      검색어 철자가 정확한지 다시 한번 확인해주세요.
                    </$.SearchAgain>
                  </$.NoSpotsContainer>
                )}
            </$.SearchContainer>
            <$.PageDiv>
              <$.PrevPage onClick={(e) => setPagination(pagination - 1)} />
              {pages.map((page) => (
                <$.PageNum>{page}</$.PageNum>
              ))}
              <$.NextPage onClick={(e) => setPagination(pagination + 1)} />
            </$.PageDiv>
          </$.EnterDiv>
          <$.CloseBtn onClick={(e) => setIsEnter(false)}>
            <$.CloseIcon></$.CloseIcon>
          </$.CloseBtn>
        </>
      )}
    </>
  );
};
export default SearchPlace;
