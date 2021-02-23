import React, { useEffect, useState } from 'react';
import * as $ from './MapAreaView';
import emojis from '~/constants/sugar';
import Storage from '~/lib/storage';
import { gql, useLazyQuery, useReactiveVar } from '@apollo/client';
import {
  useCurrentPositionState,
  useIsCustomSpotSetting,
  useMapSpotsState,
} from '~/lib/apollo/vars/home';
import SpotOverlay from './SpotOverlay';
import { ATTR_OVERLAY_ID, CLASS_OVERLAY } from '~/constants/kakaoMap';

const GET_MAP_SPOTS = gql`
  query GetMapSpots($searchSpotDto: SearchSpotDto) {
    spots(searchSpotDto: $searchSpotDto) {
      _id
      place_id
      stickers(populate: true) {
        _id
        is_used
      }
      place_name
      category_name
      category_group_code
      category_group_name
      phone
      address_name
      road_address_name
      place_url
      distance
      x
      y
    }
  }
`;

const getLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      alert('GPS를 지원하지 않습니다');
      return;
    }

    // GPS를 지원하면
    navigator.geolocation.getCurrentPosition(
      function (position) {
        resolve(position);
      },
      function (error) {
        reject(error);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000 * 60,
        timeout: Infinity,
      }
    );
  });
};

const createKakaoMap = (center: { lat: number; lng: number }) => {
  return new (window as any).kakao.maps.Map(document.getElementById('map'), {
    center: new (window as any).kakao.maps.LatLng(center.lat, center.lng),
    level: 4,
  });
};

const overlayEventHandlerMap: {
  [spotId: string]: any;
} = {};

const MapArea: React.FC = () => {
  const {
    Circle,
    LatLng,
    MarkerImage,
    Marker,
    Size,
    Point,
  } = (window as any).kakao.maps;

  const [kakaoMap, setKakaoMap] = useState(null);
  const [getMapSpots, { loading, data, called }] = useLazyQuery<
    GQL.GetMapSpots.Data,
    GQL.GetMapSpots.Variables
  >(GET_MAP_SPOTS);
  const [mapSpots, setMapSpots] = useMapSpotsState();
  const [currentPosition, setCurrentPosition] = useCurrentPositionState();
  const isCustomSpotSetting = useReactiveVar(useIsCustomSpotSetting);

  // 카카오에서 지원하는 오버레이 클릭 방식이
  // 아키텍쳐나 OOP 상 좋지 않은 방식이라서, 직접 event delegation으로 구현하는게 나을듯 함.
  // 마커 클릭은 카카오에서 지원하는 클릭이벤트 방식을 써도 될듯.
  // 일단 시간이 없어서 해당 컴포넌트에서 다 구현하는데 추후 리팩토링 필요할듯.
  const handleClickKakaoMap = (e: React.MouseEvent) => {
    const elTarget: HTMLElement = e.target as HTMLElement;
    const elOverlay = elTarget.closest(`.${CLASS_OVERLAY}`);

    if (!elOverlay) {
      return;
    }

    const spotIdOfOverlay = elOverlay.getAttribute(ATTR_OVERLAY_ID);
    const eventHandler = overlayEventHandlerMap[spotIdOfOverlay];

    eventHandler && eventHandler();
  };

  useEffect(() => {
    const kakaoMap = createKakaoMap({
      lat: currentPosition.latY,
      lng: currentPosition.lngX,
    });
    const storedPosition = Storage.getCurrentPosition();

    setKakaoMap(kakaoMap);
    if (storedPosition) {
      setCurrentPosition(storedPosition);
    }
    getLocation().then((position: any) => {
      setCurrentPosition({
        latY: position.coords.latitude,
        lngX: position.coords.longitude,
      });
    });
    getMapSpots({
      variables: {
        searchSpotDto: {
          x: currentPosition.lngX,
          y: currentPosition.latY,
        },
      },
    });
  }, []);

  useEffect(() => {
    if (data && data?.spots) {
      setMapSpots(data?.spots);
    }
  }, [data, called, loading]);

  useEffect(() => {
    kakaoMap?.setCenter(new LatLng(currentPosition.latY, currentPosition.lngX));
    Storage.setCurrentPosition(currentPosition);
    getMapSpots({
      variables: {
        searchSpotDto: {
          x: currentPosition.lngX,
          y: currentPosition.latY,
        },
      },
    });
  }, [currentPosition]);

  useEffect(() => {
    if (!kakaoMap) {
      return;
    }

    const circle = new Circle({
      center: new LatLng(currentPosition.latY, currentPosition.lngX), // 원의 중심좌표 입니다
      radius: 500,
      strokeWeight: 1, // 선의 두께입니다
      strokeColor: '#FD476D', // 선의 색깔입니다
      strokeOpacity: 0, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle: 'solid',
      fillColor: '#FD476D',
      fillOpacity: 0.3,
    });

    const circle2 = new Circle({
      center: new LatLng(currentPosition.latY, currentPosition.lngX), // 원의 중심좌표 입니다
      radius: 1000,
      strokeWeight: 1, // 선의 두께입니다
      strokeColor: '#FD476D', // 선의 색깔입니다
      strokeOpacity: 0, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle: 'solid',
      fillColor: '#FD476D',
      fillOpacity: 0.12,
    });

    mapSpots
      .map((spot) => {
        const emojiObj = {
          pos: new LatLng(spot.y, spot.x),
          imgSrc: emojis.sugar0.stickers[0].imageUrl,
          imgSize: new Size(50, 50),
          imgOptions: {
            spriteOrigin: new Point(0, 0),
            spriteSize: new Size(50, 50),
          },
        };

        const markerImg = new MarkerImage(
          emojiObj.imgSrc,
          emojiObj.imgSize,
          emojiObj.imgOptions
        );
        const marker = new Marker({
          position: emojiObj.pos,
          image: markerImg,
        });

        return { marker };
      })
      .forEach(({ marker }) => {
        marker.setMap(kakaoMap);
      });

    circle.setMap(kakaoMap);
    circle2.setMap(kakaoMap);

    // 지도를 클릭한 위치에 표출할 마커입니다
    new Marker({
      position: kakaoMap.getCenter(),
    });

    return () => {
      circle.setMap(null);
      circle2.setMap(null);
    };
  }, [mapSpots, currentPosition, isCustomSpotSetting]);

  return (
    <>
      <$.MapArea onClick={handleClickKakaoMap} />
      {kakaoMap &&
        mapSpots.map((spot: GQL.Spot) => (
          <SpotOverlay
            key={`mapspot-${spot._id}`}
            spot={spot}
            kakaoCoord={new (window as any).kakao.maps.LatLng(spot.y, spot.x)}
            kakaoMap={kakaoMap}
            eventHandlerMap={overlayEventHandlerMap}
          />
        ))}
    </>
  );
};

export default MapArea;
