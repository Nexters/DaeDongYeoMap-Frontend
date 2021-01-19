import React, { useEffect } from 'react';
import * as $ from './MapAreaView';
import emojis from '../../../../constants/emojis';
import { useRecoilState } from 'recoil';
import { spotGeneratorShowState } from '../MainMapPageState';
import {
  currentLatLng,
  emojiState,
} from '../../SpotGenerator/SpotGeneratorState';

declare global {
  interface Window {
    kakao: any;
  }
}

const dummySpots = [
  {
    id: '1890778114',
    place_name: '연돈',
    x: 126.40716457908,
    y: 33.2588962209144,
    emoji: 0,
  },
  {
    id: '18242590',
    place_name: '한그릇',
    x: 126.415391880392,
    y: 33.2572356176924,
    emoji: 1,
  },
  {
    id: '1329028966',
    place_name: '몸냥식탁',
    x: 126.423217971909,
    y: 33.2515865370013,
    emoji: 3,
  },
  {
    id: '26939387',
    place_name: '다정한식탁',
    x: 126.426296149705,
    y: 33.2583972011196,
    emoji: 2,
  },
  {
    id: '27445811',
    place_name: '미우야',
    x: 126.419697049473,
    y: 33.2429993330923,
    emoji: 4,
  },
  {
    id: '1607876421',
    place_name: '행복한뽕끌락',
    x: 126.430418940905,
    y: 33.2515025151687,
    emoji: 2,
  },
  {
    id: '1112272374',
    place_name: '포커스',
    x: 126.389149989117,
    y: 33.243819598071,
    emoji: 1,
  },
  {
    id: '13265800',
    place_name: '델리지아',
    x: 126.424424848448,
    y: 33.2413262490429,
    emoji: 1,
  },
  {
    id: '26600120',
    place_name: '홀가분키친',
    x: 126.369766564977,
    y: 33.2678646136626,
    emoji: 3,
  },
  {
    id: '1666544193',
    place_name: '올레8길흑돼지',
    x: 126.443092710552,
    y: 33.2415951653081,
    emoji: 3,
  },
  {
    id: '970199448',
    place_name: '카페헬로',
    x: 126.45093543431,
    y: 33.243418857738,
    emoji: 4,
  },
  {
    id: '27222676',
    place_name: '황기순의 손칼국수&왕돈까스 강정마을점',
    x: 126.475155744946,
    y: 33.2375474365592,
    emoji: 5,
  },
  {
    id: '27214319',
    place_name: '봉유',
    x: 126.328214069844,
    y: 33.2868369487956,
    emoji: 5,
  },
  {
    id: '691075000',
    place_name: '영육일삼',
    x: 126.488340711676,
    y: 33.234443064409,
    emoji: 0,
  },
  {
    id: '1153120017',
    place_name: '현하돈까스',
    x: 126.4943389492729,
    y: 33.25778006518737,
    emoji: 0,
  },
];

const MapArea: React.FC = () => {
  const [isShownSpotGenerator, _] = useRecoilState(spotGeneratorShowState);
  const [selectedEmoji, __] = useRecoilState(emojiState);
  const [___, setCurLatLng] = useRecoilState(currentLatLng);

  useEffect(() => {
    (window as any).kakao.maps.load(() => {
      const el = document.getElementById('map');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const map = new (window as any).kakao.maps.Map(el, {
        center: new (window as any).kakao.maps.LatLng(
          33.2588962209144,
          126.40716457908
        ),
        level: 5,
      });

      const circle = new (window as any).kakao.maps.Circle({
        center: new (window as any).kakao.maps.LatLng(
          33.2588962209144,
          126.40716457908
        ), // 원의 중심좌표 입니다
        radius: 500,
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: '#73E2A0', // 선의 색깔입니다
        strokeOpacity: 0, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid',
        fillColor: '#73E2A0',
        fillOpacity: 0.3,
      });

      const circle2 = new (window as any).kakao.maps.Circle({
        center: new (window as any).kakao.maps.LatLng(
          33.2588962209144,
          126.40716457908
        ), // 원의 중심좌표 입니다
        radius: 1000,
        strokeWeight: 1, // 선의 두께입니다
        strokeColor: '#73E2A0', // 선의 색깔입니다
        strokeOpacity: 0, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid',
        fillColor: '#73E2A0',
        fillOpacity: 0.12,
      });

      dummySpots
        .map((spot) => {
          const emojiObj = {
            pos: new (window as any).kakao.maps.LatLng(spot.y, spot.x),
            imgSrc: emojis[spot.emoji].imageUrl,
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
          if (isShownSpotGenerator && selectedEmoji !== null) {
            marker.setPosition(latlng);
            setCurLatLng({
              lat: latlng.getLat(),
              lng: latlng.getLng(),
            });
            // 지도에 스팟 이모지를 표시합니다
            const spotEmoji = {
              pos: new (window as any).kakao.maps.LatLng(
                latlng.getLat(),
                latlng.getLng()
              ),
              imgSrc: emojis[selectedEmoji].imageUrl,
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
  }, [isShownSpotGenerator, selectedEmoji]);

  return (
  <$.MapArea>
    <SearchPlace />
    <MainMood />
  </$.MapArea>
  );
};

export default MapArea;
