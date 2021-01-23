import React, { useEffect } from 'react';
import * as $ from './MainPageView';
import { useRecoilState } from 'recoil';
import sidebarIcons from '~/constants/sidebarIcons';
import IconSelector from '~/components/Home/MainMapPage/IconSelector';
import { sidebarState } from '~/components/Home/MainMapPage/MainMapPageState';
import { spotGeneratorShowState } from '../MainMapPageState';
import MapArea from '~/components/Home/MainMapPage/MapArea';
import ScriptLoader from '~/components/_common/ScriptLoader';
import Popup from '~/components/Popup';
import { PopupType } from '~/@types/popup.d';

const MainPage: React.FC = () => {
  const [isShownSpotGenerator, setIsShownSpotGenerator] = useRecoilState(
    spotGeneratorShowState
  );
  const [selectedState, setSelectedState] = useRecoilState(sidebarState);

  const handleClickSelectedIcon = (label: string) => {
    console.log(label);
    setSelectedState(label);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsShownSpotGenerator(true);
    }, 5000);
  }, []);

  return (
    <$.MainPage>
      <$.LeftSideBar>
        <IconSelector
          icon={selectedState === 'home' ? sidebarIcons[1] : sidebarIcons[0]}
          onClick={() => handleClickSelectedIcon('home')}
        />
        <IconSelector
          icon={selectedState === 'profile' ? sidebarIcons[3] : sidebarIcons[2]}
          onClick={() => handleClickSelectedIcon('profile')}
        />
        <IconSelector
          icon={selectedState === 'setting' ? sidebarIcons[5] : sidebarIcons[4]}
          onClick={() => handleClickSelectedIcon('setting')}
        />
      </$.LeftSideBar>
      <$.Content>
        <ScriptLoader src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=0e6db48d0c7634cd2e3eec3354bd4145&autoload=false">
          {({ isScriptLoaded }) => isScriptLoaded && <MapArea />}
        </ScriptLoader>
        {isShownSpotGenerator && (
          <Popup
            popupType={PopupType.SPOT_GENERATOR}
            popupProps={{ placeId: 'dummyPlaceId' }}
            onClickCloseButton={() => setIsShownSpotGenerator(false)}
          />
        )}
      </$.Content>
    </$.MainPage>
  );
};

export default MainPage;
