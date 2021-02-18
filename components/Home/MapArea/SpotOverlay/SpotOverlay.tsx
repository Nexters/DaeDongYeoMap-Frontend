import React, { useEffect } from 'react';
import { templateSpotOverlay } from './SpotOverlayView';

type Props = {
  spot: GQL.Spot;
  kakaoCoord: any;
  kakaoMap: any;
  eventHandlerMap: any;
};

const SpotOverlay: React.FC<Props> = ({
  spot,
  kakaoCoord,
  kakaoMap,
  eventHandlerMap,
}) => {
  const { CustomOverlay } = (window as any).kakao.maps;

  console.log('RENDER CUSTOM OVERLAY: ', spot);
  useEffect(() => {
    const spotOverlay = new CustomOverlay({
      map: kakaoMap,
      position: kakaoCoord,
      content: templateSpotOverlay({
        spotId: spot._id,
        placeName: spot.place_name,
      }),
      yAnchor: 1,
    });

    const handleClickOverlay = () => {
      console.log('CLICK OVERLAY: ', spot);
    };

    eventHandlerMap[spot._id] = handleClickOverlay;
    spotOverlay.setMap(kakaoMap);

    return () => {
      spotOverlay.setMap(null);
      delete eventHandlerMap[spot._id];
    };
  }, [spot, kakaoMap]);

  return null;
};

export default SpotOverlay;
