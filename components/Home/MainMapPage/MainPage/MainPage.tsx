import React from 'react';
import * as $ from './MainPageView';
import sidebarIcons from '~/constants/sidebarIcons';
import IconSelector from '~/components/Home/MainMapPage/IconSelector';
import MapArea from '~/components/Home/MainMapPage/MapArea';
import ScriptLoader from '~/components/_common/ScriptLoader';
import Popup from '~/components/Popup';
import { PopupType } from '~/@types/popup.d';

const MainPage: React.FC = () => {
  const handleClickSelectedIcon = (label: string) => {
    console.log(label);
  };

  return (
    <$.MainPage>
      <$.LeftSideBar>
        <IconSelector
          icon={true ? sidebarIcons[1] : sidebarIcons[0]}
          onClick={() => handleClickSelectedIcon('home')}
        />
        <IconSelector
          icon={true ? sidebarIcons[3] : sidebarIcons[2]}
          onClick={() => handleClickSelectedIcon('profile')}
        />
        <IconSelector
          icon={true ? sidebarIcons[5] : sidebarIcons[4]}
          onClick={() => handleClickSelectedIcon('setting')}
        />
      </$.LeftSideBar>
      <$.Content>
        <ScriptLoader src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=0e6db48d0c7634cd2e3eec3354bd4145&autoload=false">
          {({ isScriptLoaded }) => isScriptLoaded && <MapArea />}
        </ScriptLoader>
        <Popup
          popupType={PopupType.SPOT_GENERATOR}
          popupProps={{ placeId: 'dummyPlaceId' }}
          onClickCloseButton={() => null}
        />
      </$.Content>
    </$.MainPage>
  );
};

export default MainPage;
