import React, { useEffect } from 'react';
import * as $ from './MapAreaView';
import emojis from '~/constants/sugar';
import { usePopupOpener } from '~/lib/apollo/hooks/usePopup';
import { PopupType } from '~/@types/popup.d';
import { gql, useLazyQuery, useReactiveVar } from '@apollo/client';
import {
  useCurrentPosition,
  useIsCustomSpotSetting,
  useSpotsState,
} from '~/lib/apollo/vars/home';

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

const MapArea: React.FC = () => {
  const openPopup = usePopupOpener();
  const [getAllSpots, { loading, data, called }] = useLazyQuery(
    FETCH_ALL_SPOTS
  );
  const initPos = useEffect(() => {
    getAllSpots();
  }, [data]);

  const spotsState = useSpotsState();
  const currentPosition = useCurrentPosition();
  const isCustomSpotSetting = useReactiveVar(useIsCustomSpotSetting);

  useEffect(() => {
    if (data && data?.spots) {
      useSpotsState(data?.spots);
    }
  }, [data, called, loading]);

  console.log(spotsState);
  console.log(currentPosition);

  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        // GPS를 지원하면
        navigator.geolocation.getCurrentPosition(
          function (position) {
            useCurrentPosition({
              latY: position.coords.latitude,
              lngX: position.coords.longitude,
            });
          },
          function (error) {
            console.error(error);
          },
          {
            enableHighAccuracy: false,
            maximumAge: 0,
            timeout: Infinity,
          }
        );
      } else {
        alert('GPS를 지원하지 않습니다');
      }
    }

    getLocation();
  }, []);

  useEffect(() => {
    openPopup({
      popupType: PopupType.SPOT_GENERATOR,
      popupProps: {
        placeId: '',
      },
    });

    (window as any).kakao.maps.load(() => {
      const el = document.getElementById('map');
      // TODO - 커스텀 커서 만들기
      console.log(isCustomSpotSetting);
      // if (isCustomSpotSetting) el.classList.add('spot-marker');
      // else el.classList.remove('spot-marker');

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const map = new (window as any).kakao.maps.Map(el, {
        center: new (window as any).kakao.maps.LatLng(
          currentPosition.latY,
          currentPosition.lngX
        ),
        level: 4,
      });

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
          // TODO - click 시 함수는 어디에 위치시켜야 하는가?
          const content = `<div class="custom-overlay"><a href="#" target="_blank"><span class="title">${spot.place_name}</span></a></div>`;
          const customOverlay = new (window as any).kakao.maps.CustomOverlay({
            map: map,
            position: emojiObj.pos,
            content: content,
            yAnchor: 1,
          });

          return { marker, customOverlay };
        })
        .forEach(({ marker, customOverlay }) => {
          marker.setMap(map);
          customOverlay.setMap(map);
        });

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
  }, [spotsState, currentPosition, isCustomSpotSetting]);

  return <$.MapArea></$.MapArea>;
};

export default MapArea;
