import React, { useEffect, useState } from 'react';
import * as $ from './MapAreaView';
import emojis from '~/constants/sugar';
import { gql, useLazyQuery, useReactiveVar } from '@apollo/client';
import {
  useCurrentPosition,
  useIsCustomSpotSetting,
  useMapSpotsState,
} from '~/lib/apollo/vars/home';
import SpotOverlay from './SpotOverlay';

declare global {
  interface Window {
    kakao: any;
  }
}

const FETCH_ALL_SPOTS = gql`
  {
    spots {
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
        maximumAge: 0,
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

const MapArea: React.FC = () => {
  const [kakaoMap, setKakaoMap] = useState(null);
  const [getAllSpots, { loading, data, called }] = useLazyQuery(
    FETCH_ALL_SPOTS
  );
  const [mapSpots, setMapSpots] = useMapSpotsState();
  const currentPosition = useCurrentPosition();
  const isCustomSpotSetting = useReactiveVar(useIsCustomSpotSetting);

  console.log('SPOTS_STATE: ', mapSpots);

  useEffect(() => {
    const kakaoMap = createKakaoMap({
      lat: currentPosition.latY,
      lng: currentPosition.lngX,
    });

    setKakaoMap(kakaoMap);
    getLocation().then((position: any) => {
      useCurrentPosition({
        latY: position.coords.latitude,
        lngX: position.coords.longitude,
      });
    });
    getAllSpots();
  }, []);

  useEffect(() => {
    if (data && data?.spots) {
      setMapSpots(data?.spots);
    }
  }, [data, called, loading]);

  useEffect(() => {
    if (!kakaoMap) {
      return;
    }

    // TODO - 커스텀 커서 만들기
    console.log(isCustomSpotSetting);
    // if (isCustomSpotSetting) el.classList.add('spot-marker');
    // else el.classList.remove('spot-marker');

    const circle = new (window as any).kakao.maps.Circle({
      center: new (window as any).kakao.maps.LatLng(
        currentPosition.latY,
        currentPosition.lngX
      ), // 원의 중심좌표 입니다
      radius: 500,
      strokeWeight: 1, // 선의 두께입니다
      strokeColor: '#FD476D', // 선의 색깔입니다
      strokeOpacity: 0, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
      strokeStyle: 'solid',
      fillColor: '#FD476D',
      fillOpacity: 0.3,
    });

    const circle2 = new (window as any).kakao.maps.Circle({
      center: new (window as any).kakao.maps.LatLng(
        currentPosition.latY,
        currentPosition.lngX
      ), // 원의 중심좌표 입니다
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
          pos: new (window as any).kakao.maps.LatLng(spot.y, spot.x),
          imgSrc: emojis.sugar0.stickers[0].imageUrl,
          imgSize: new (window as any).kakao.maps.Size(50, 50),
          imgOptions: {
            spriteOrigin: new (window as any).kakao.maps.Point(0, 0),
            spriteSize: new (window as any).kakao.maps.Size(50, 50),
          },
        };

        const markerImg = new (window as any).kakao.maps.MarkerImage(
          emojiObj.imgSrc,
          emojiObj.imgSize,
          emojiObj.imgOptions
        );
        const marker = new (window as any).kakao.maps.Marker({
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
    new (window as any).kakao.maps.Marker({
      position: kakaoMap.getCenter(),
    });
  }, [mapSpots, currentPosition, isCustomSpotSetting]);

  return (
    <>
      <$.MapArea />
      {kakaoMap &&
        mapSpots.map((spot: GQL.Spot) => (
          <SpotOverlay
            key={`mapspot-${spot._id}`}
            spot={spot}
            kakaoCoord={new (window as any).kakao.maps.LatLng(spot.y, spot.x)}
            kakaoMap={kakaoMap}
          />
        ))}
    </>
  );
};

export default MapArea;

// < useEffect 안에서 마우스 이벤트 리스너 추가하던 부분 >
// 현재 호출되지 않는 소스코드라 임시로 빼둔 상태

// (window as any).kakao.maps.event.addListener(
//   kakaoMap,
//   'mouseup',
//   function (mouseEvent) {
//     // 클릭한 위도, 경도 정보를 가져옵니다
//     const latlng = mouseEvent.latLng;
//     if (false) {
//       marker.setPosition(latlng);
//       const spotEmoji = {
//         pos: new (window as any).kakao.maps.LatLng(
//           latlng.getLat(),
//           latlng.getLng()
//         ),
//         imgSrc: '',
//         imgSize: new (window as any).kakao.maps.Size(50, 50),
//         imgOptions: {
//           spriteOrigin: new (window as any).kakao.maps.Point(0, 0),
//           spriteSize: new (window as any).kakao.maps.Size(50, 50),
//         },
//       };
//       const emojiImg = new (window as any).kakao.maps.MarkerImage(
//         spotEmoji.imgSrc,
//         spotEmoji.imgSize,
//         spotEmoji.imgOptions
//       );
//       const emoji = new (window as any).kakao.maps.Marker({
//         position: spotEmoji.pos,
//         image: emojiImg,
//       });
//       emoji.setMap(map);
//     }
//   }
// );
