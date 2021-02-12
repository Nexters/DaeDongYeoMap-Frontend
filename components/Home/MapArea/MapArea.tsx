import React, { useEffect } from 'react';
import * as $ from './MapAreaView';
import emojis from '~/constants/sugar';
import SearchPlace from '../SearchPlace';
import MainMood from '../Mood';
import { usePopupOpener } from '~/lib/apollo/hooks/usePopup';
import { PopupType } from '~/@types/popup.d';
import { gql, useLazyQuery } from '@apollo/client';
import { useSpotsState } from '~/lib/apollo/vars/home';

declare global {
  interface Window {
    kakao: any;
  }
}

const FETCH_ALL_SPOTS = gql`
  {
    spots {
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

const MapArea: React.FC = () => {
  const openPopup = usePopupOpener();
  const [getAllSpots, { loading, data, called }] = useLazyQuery(
    FETCH_ALL_SPOTS
  );

  useEffect(() => {
    getAllSpots();
  }, [data]);

  const spotsState = useSpotsState();

  useEffect(() => {
    if (data && data?.spots) {
      useSpotsState(data?.spots);
    }
  }, [data, called, loading]);

  // TODO - spotState를 받아서 화면에 그려줌
  console.log(spotsState);

  useEffect(() => {
    openPopup({
      popupType: PopupType.SPOT_GENERATOR,
      popupProps: {
        placeId: '',
      },
    });

    (window as any).kakao.maps.load(() => {
      const el = document.getElementById('map');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const map = new (window as any).kakao.maps.Map(el, {
        center: new (window as any).kakao.maps.LatLng(37.2968082, 127.0671244),
        level: 4,
      });

      const circle = new (window as any).kakao.maps.Circle({
        center: new (window as any).kakao.maps.LatLng(37.2968082, 127.0671244), // 원의 중심좌표 입니다
        radius: 500,
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: '#73E2A0', // 선의 색깔입니다
        strokeOpacity: 0, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid',
        fillColor: '#73E2A0',
        fillOpacity: 0.3,
      });

      const circle2 = new (window as any).kakao.maps.Circle({
        center: new (window as any).kakao.maps.LatLng(37.2968082, 127.0671244), // 원의 중심좌표 입니다
        radius: 1000,
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: '#73E2A0', // 선의 색깔입니다
        strokeOpacity: 0, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid',
        fillColor: '#73E2A0',
        fillOpacity: 0.12,
      });

      spotsState
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
          return marker;
        })
        .forEach((spot) => spot.setMap(map));

      circle.setMap(map);
      circle2.setMap(map);

      // 지도를 클릭한 위치에 표출할 마커입니다
      const marker = new (window as any).kakao.maps.Marker({
        position: map.getCenter(),
      });

      (window as any).kakao.maps.event.addListener(
        map,
        'mouseup',
        function (mouseEvent) {
          // 클릭한 위도, 경도 정보를 가져옵니다
          const latlng = mouseEvent.latLng;
          if (false) {
            marker.setPosition(latlng);
            // setCurLatLng({
            //   lat: latlng.getLat(),
            //   lng: latlng.getLng(),
            // });
            // 지도에 스팟 이모지를 표시합니다
            const spotEmoji = {
              pos: new (window as any).kakao.maps.LatLng(
                latlng.getLat(),
                latlng.getLng()
              ),
              imgSrc: '',
              imgSize: new (window as any).kakao.maps.Size(50, 50),
              imgOptions: {
                spriteOrigin: new (window as any).kakao.maps.Point(0, 0),
                spriteSize: new (window as any).kakao.maps.Size(50, 50),
              },
            };
            const emojiImg = new (window as any).kakao.maps.MarkerImage(
              spotEmoji.imgSrc,
              spotEmoji.imgSize,
              spotEmoji.imgOptions
            );
            const emoji = new (window as any).kakao.maps.Marker({
              position: spotEmoji.pos,
              image: emojiImg,
            });
            emoji.setMap(map);
          }
        }
      );
    });
  }, [spotsState]);

  return (
    <$.MapArea>
      <SearchPlace />
      <MainMood />
    </$.MapArea>
  );
};

export default MapArea;
