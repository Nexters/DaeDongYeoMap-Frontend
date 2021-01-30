import React from 'react';
import * as $ from './HomeView';
import MapArea from '~/components/Home/MapArea';
import GNB from '~/components/_common/GNB';
import ScriptLoader from '~/components/_common/ScriptLoader';

const Home: React.FC = () => {
  return (
    <$.Home>
      <GNB />
      <$.Content>
        <ScriptLoader src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=0e6db48d0c7634cd2e3eec3354bd4145&autoload=false">
          {({ isScriptLoaded }) => isScriptLoaded && <MapArea />}
        </ScriptLoader>
      </$.Content>
    </$.Home>
  );
};

export default Home;
