import React, { useEffect } from 'react';
import * as $ from './MapAreaView';

declare global {
  interface Window {
    kakao: any;
  }
}

const MapArea: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://dapi.kakao.com/v2/maps/sdk.js?appkey=0e6db48d0c7634cd2e3eec3354bd4145&autoload=false';
    document.head.appendChild(script);

    script.onload = () => {
      (window as any).kakao.maps.load(() => {
        const el = document.getElementById('map');
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const map = new (window as any).kakao.maps.Map(el, {
          center: new (window as any).kakao.maps.LatLng(
            33.2588962209144,
            126.40716457908
          ),
          level: 3,
        });

        const circle = new (window as any).kakao.maps.Circle({
          center: new (window as any).kakao.maps.LatLng(
            33.2588962209144,
            126.40716457908
          ), // 원의 중심좌표 입니다
          radius: 50,
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
          radius: 100,
          strokeWeight: 1, // 선의 두께입니다
          strokeColor: '#73E2A0', // 선의 색깔입니다
          strokeOpacity: 0, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle: 'solid',
          fillColor: '#73E2A0',
          fillOpacity: 0.12,
        });

        circle.setMap(map);
        circle2.setMap(map);
      });
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <$.MapArea />;
};

export default MapArea;
