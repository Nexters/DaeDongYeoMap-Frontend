import React from 'react';
import MapArea from '~/components/Home/MapArea';
import ScriptLoader from '~/components/_common/ScriptLoader';
import Popup from '~/components/Popup';
import SearchPlace from '~/components/Home/SearchPlace';
import MainMood from '~/components/Home/Mood/MainMood';
const Home: React.FC = () => {
  return (
    <>
      <ScriptLoader
        src="http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=dbf0edb12357b5358056521649e9a8de"
        blocker={() =>
          new Promise((resolve) => {
            (window as any).kakao.maps.load(resolve);
          })
        }
      >
        {({ isScriptLoaded }) => isScriptLoaded && <MapArea />}
      </ScriptLoader>
      <SearchPlace />
      <MainMood />
      <Popup />
    </>
  );
};

export default Home;
