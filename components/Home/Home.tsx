import React from 'react';
import MapArea from '~/components/Home/MapArea';
import ScriptLoader from '~/components/_common/ScriptLoader';
import Popup from '~/components/Popup';

const Home: React.FC = () => {
  return (
    <>
      <ScriptLoader src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=0e6db48d0c7634cd2e3eec3354bd4145&autoload=false">
        {({ isScriptLoaded }) => isScriptLoaded && <MapArea />}
      </ScriptLoader>
      <Popup />
    </>
  );
};

export default Home;
