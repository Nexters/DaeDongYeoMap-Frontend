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
          center: new (window as any).kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        });
      });
    };
  }, []);

  return <$.MapArea></$.MapArea>;
};

export default MapArea;
