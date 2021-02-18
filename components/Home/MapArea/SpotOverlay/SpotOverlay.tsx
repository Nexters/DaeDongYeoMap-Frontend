import React, { useEffect } from 'react';
import { templateSpotOverlay } from './SpotOverlayView';
import { usePopupOpener } from '~/lib/apollo/hooks/usePopup';
import { PopupType } from '~/@types/popup.d';

type Props = {
  spot?: GQL.Spot;
  place?: GQL.Place;
  kakaoCoord: any;
  kakaoMap: any;
  eventHandlerMap: any;
};

const SpotOverlay: React.FC<Props> = ({
  spot,
  place,
  kakaoCoord,
  kakaoMap,
  eventHandlerMap,
}) => {
  const { CustomOverlay } = (window as any).kakao.maps;
  const openPopup = usePopupOpener();

  useEffect(() => {
    const spotOverlay = new CustomOverlay({
      map: kakaoMap,
      position: kakaoCoord,
      content: templateSpotOverlay({
        spotId: spot?._id || place?.id,
        placeName: spot?.place_name || place?.place_name,
      }),
      yAnchor: 1,
    });

    const handleClickOverlay = () => {
      openPopup({
        popupType: PopupType.SPOT_GENERATOR,
        popupProps: {
          place: {
            id: spot?._id || place?.id,
            name: spot?.place_name || place?.place_name,
            x: spot?.x || place?.x,
            y: spot?.y || place?.y,
          },
        },
      });
    };

    eventHandlerMap[spot?._id || place?.id] = handleClickOverlay;
    spotOverlay.setMap(kakaoMap);

    return () => {
      spotOverlay.setMap(null);
      delete eventHandlerMap[spot?._id || place?.id];
    };
  }, [spot, place, kakaoMap]);

  return null;
};

export default SpotOverlay;
