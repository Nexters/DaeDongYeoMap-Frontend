import React, { useEffect } from 'react';
import { templateSpotOverlay } from './SpotOverlayView';

type Props = {
  spot: GQL.Spot;
  kakaoCoord: any;
  kakaoMap: any;
};

const SpotOverlay: React.FC<Props> = ({ spot, kakaoCoord, kakaoMap }) => {
  const CustomOverlay = (window as any).kakao.maps.CustomOverlay;

  console.log('RENDER CUSTOM OVERLAY: ', spot);
  useEffect(() => {
    const customOverlay = new CustomOverlay({
      map: kakaoMap,
      position: kakaoCoord,
      content: templateSpotOverlay({
        placeName: spot.place_name,
      }),
      yAnchor: 1,
    });

    const removeOverlay = () => {
      customOverlay.setMap(null);
    };
    customOverlay.setMap(kakaoMap);

    return removeOverlay;
  }, [spot, kakaoMap]);

  return null;
};

export default SpotOverlay;
