import React, { useState } from 'react';
import * as $ from './SearchPlaceView';
import { gql, useLazyQuery } from '@apollo/client';
import { debounce } from 'lodash';
import { useReactiveVar } from '@apollo/client';
import {
  currentPosition,
  useCurrentPositionSetter,
  useIsCustomSpotSetting,
} from '~/lib/apollo/vars/home';

//TODO: 스팟 클릭시 지도 이동
const PLACES_AND_SPOTS_BY_KEYWORDID = gql`
  query placesAndSpotsByKeyword(
    $query: String!
    $keyword: String!
    $X: Float
    $Y: Float
    $currentPage: Int
  ) {
    places(
      filters: { query: $query, x: $X, y: $Y, page: $currentPage, size: 10 }
    ) {
      pageInfo {
        total_count
        is_end
        cur_page
        total_page_count
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
  const myPosition = currentPosition();
  const setCurrentPosition = useCurrentPositionSetter();
  console.log(myPosition, '내 위치');
  const X = myPosition.lngX;
  const Y = myPosition.latY;
  console.log(X, 'x');
  console.log(Y, 'y');
  const [pagination, setPagination] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const nums = [1, 2, 3, 4, 5];
  const pages = nums.map((num) => 5 * pagination + num);
  const [loadData, { loading, data: placesAndSpotsByKeyword }] = useLazyQuery(
    PLACES_AND_SPOTS_BY_KEYWORDID,
    {
      variables: { query, keyword, X, Y, currentPage },
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
    setPagination(0);
    setCurrentPage(1);
    loadData();
    setSearchKeyword(keyword);
    setIsClicked(false);
    setIsEnter(true);
    // setKeyword('');
  };

  const clickInput = () => {
    setIsClicked(true);
  };

  const handleClickSpots = (e: React.MouseEvent, x: number, y: number) => {
    e.preventDefault();
    console.log(y, x, '스팟의 y,x');
    myPosition.latY = y;
    myPosition.lngX = x;
    setCurrentPosition({ latY: y, lngX: x });
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

  const changePage = (e: React.MouseEvent, page: number) => {
    e.preventDefault();
    setCurrentPage(page);
    loadData();
  };

  const prevPages = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pagination > 0) {
      setPagination(pagination - 1);
      setCurrentPage(5 * (pagination - 1) + 1);
      loadData();
    }
  };

  const nextPages = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pagination < 8) {
      setPagination(pagination + 1);
      setCurrentPage(5 * (pagination + 1) + 1);
      loadData();
    }
  };

  const resetSearch = () => {
    setIsClicked(false);
    console.log(isClicked, '??');
    setKeyword('');
    setSearchKeyword('');
  };

  return (
    <>
      <$.SearchForm
        onSubmit={submitValue}
        is-focused={isClicked || keyword}
        is-autocomplete={isClicked && placesAndSpotsByKeyword}
      >
        <$.SearchIcon />
        <$.InputField
          type="text"
          name="searchValue"
          placeholder={'데이트 스팟 검색'}
          value={keyword}
          onClick={clickInput}
          onChange={onChangeInput}
          autoFocus={true}
          autoComplete="off"
        />
        <$.ResetKeyword onClick={resetSearch} />
      </$.SearchForm>
      <$.SpotButton onClick={handleCustomSpotSetting}>
        <$.SpotButtonImg />
        <$.SpotButtonDiv>스팟 추가하기</$.SpotButtonDiv>
      </$.SpotButton>
      {isClicked && placesAndSpotsByKeyword && (
        <$.PlacesAndSpots
          no-data={
            placesAndSpotsByKeyword.places.places.length == 0 &&
            placesAndSpotsByKeyword.spots.length == 0
          }
        >
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
              .map(({ _id, place_name }) => (
                <$.PlacesAndSpotsItem key={_id}>
                  {place_name}
                </$.PlacesAndSpotsItem>
              ))}
        </$.PlacesAndSpots>
      )}
      {isEnter && searchKeyword && (
        <$.Test>
          <$.EnterDiv onClick={() => setIsClicked(false)}>
            <$.CustomBtnDiv>
              {buttons.map(({ key, label }) => {
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
                placesAndSpotsByKeyword.places.places.length == 0 &&
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
              <$.PrevPage onClick={(e) => prevPages(e)} />
              {pages.map((page, i) => (
                <$.PageNum
                  key={`searchplace-page-${i}`}
                  page-selected={page == currentPage}
                  onClick={(e) => changePage(e, page)}
                >
                  {page}
                </$.PageNum>
              ))}
              <$.NextPage onClick={(e) => nextPages(e)} />
            </$.PageDiv>
          </$.EnterDiv>
          <$.CloseBtn onClick={() => setIsEnter(false)}>
            <$.CloseIcon></$.CloseIcon>
          </$.CloseBtn>
        </$.Test>
      )}
    </>
  );
};
export default SearchPlace;
