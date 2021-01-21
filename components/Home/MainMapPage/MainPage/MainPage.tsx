import React from 'react';
import * as $ from './MainPageView';
import { useRecoilState } from 'recoil';
import sidebarIcons from '~/constants/sidebarIcons';
import IconSelector from '~/components/Home/MainMapPage/IconSelector';
import { sidebarState } from '~/components/Home/MainMapPage/MainMapPageState';
import MapArea from '~/components/Home/MainMapPage/MapArea';
import ScriptLoader from '~/components/_common/ScriptLoader';

const MainPage: React.FC = () => {
  const [selectedState, setSelectedState] = useRecoilState(sidebarState);

  const handleClickSelectedIcon = (label: string) => {
    console.log(label);
    setSelectedState(label);
  };

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
        {process.browser && (
          <ScriptLoader src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=0e6db48d0c7634cd2e3eec3354bd4145&autoload=false">
            {({ isScriptLoaded }) => isScriptLoaded && <MapArea />}
          </ScriptLoader>
        )}
      </$.Content>
    </$.MainPage>
  );
};

export default MainPage;
