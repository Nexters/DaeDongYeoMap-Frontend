import React, { useEffect } from 'react';
import * as $ from './MainPageView';
import { useRecoilState } from 'recoil';
import sidebarIcons from '../../../../constants/sidebarIcons';
import IconSelector from '../IconSelector';
import { sidebarState, spotGeneratorShowState } from '../MainMapPageState';
import MapArea from '../MapArea';
import ErrorBoundary from '../../../_common/ErrorBoundary';
import SpotGenerator from '../../SpotGenerator';

const MainPage: React.FC = () => {
  const [isShownSpotGenerator, setIsShownSpotGenerator] = useRecoilState(
    spotGeneratorShowState
  );
  const [selectedState, setSelectedState] = useRecoilState(sidebarState);

  const handleClickSelectedIcon = (label: string) => {
    console.log(label);
    setSelectedState(label);
  };

  // [임시] 더미 마커 생기기 전까지는 3초 후에 레이어 뜨는 것으로
  useEffect(() => {
    setTimeout(() => setIsShownSpotGenerator(true), 3000);
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
        <MapArea />
      </$.Content>
      {isShownSpotGenerator && (
        <ErrorBoundary>
          <React.Suspense fallback={<div></div>}>
            <SpotGenerator placeId="19555624" />
          </React.Suspense>
        </ErrorBoundary>
      )}
    </$.MainPage>
  );
};

export default MainPage;
