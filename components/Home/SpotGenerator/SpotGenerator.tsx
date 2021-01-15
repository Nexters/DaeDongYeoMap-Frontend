import { useRecoilValue, useSetRecoilState } from 'recoil';
import Title from './Title';
import PageSticker from './PageSticker';
import PageForm from './PageForm';
import { currentPlaceIdState, pageState } from './SpotGeneratorState';
import * as $ from './SpotGeneratorView';
import { useEffect } from 'react';

type Props = {
  placeId: string;
};

const SpotGenerator: React.FC<Props> = ({ placeId }) => {
  const page = useRecoilValue(pageState);
  const setCurrentPlaceId = useSetRecoilState(currentPlaceIdState);

  useEffect(() => {
    setCurrentPlaceId(placeId);
  }, [placeId]);

  return (
    <$.SpotGenerator>
      <Title />
      {page === 2 ? <PageForm /> : <PageSticker />}
    </$.SpotGenerator>
  );
};

export default SpotGenerator;
