import React, { useEffect } from 'react';
import MapArea from '~/components/Home/MapArea';
import ScriptLoader from '~/components/_common/ScriptLoader';
import Popup from '~/components/Popup';
import { usePopupOpener } from '~/lib/apollo/hooks/usePopup';
import { PopupType } from '~/@types/popup.d';
import SearchPlace from '~/components/Home/SearchPlace';

const Home: React.FC = () => {
  const openPopup = usePopupOpener();

  useEffect(() => {
    openPopup({
      popupType: PopupType.SPOT_GENERATOR,
      popupProps: {
        placeId: '',
      },
    });
  }, []);

  return (
    <>
      <ScriptLoader src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=0e6db48d0c7634cd2e3eec3354bd4145&autoload=false">
        {({ isScriptLoaded }) => isScriptLoaded && <MapArea />}
      </ScriptLoader>
      <SearchPlace />
      <Popup />
    </>
  );
};

export default Home;
