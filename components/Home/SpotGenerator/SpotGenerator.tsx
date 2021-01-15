import { useSetRecoilState } from 'recoil';
import AreaEmoji from './AreaEmoji';
import AreaFilter from './AreaFilter';
import AreaForm from './AreaForm';
import Title from './Title';
import { currentPlaceIdState } from './SpotGeneratorState';
import * as $ from './SpotGeneratorView';
import { useEffect } from 'react';

type Props = {
  placeId: string;
};

const SpotGenerator: React.FC<Props> = ({ placeId }) => {
  const setCurrentPlaceId = useSetRecoilState(currentPlaceIdState);

  useEffect(() => {
    setCurrentPlaceId(placeId);
  }, [placeId]);

  return (
    <$.SpotGenerator>
      <Title />
      <$.Inner>
        <$.AreaText>
          <$.HelpTitle>스티커를 원하는 장소에 붙여보세요</$.HelpTitle>
          <$.HelpText>
            무드 탭을 선택해 스티커로 장소의 무드를 표현해보세요
          </$.HelpText>
        </$.AreaText>
        <AreaFilter />
        <AreaEmoji />
        <AreaForm />
      </$.Inner>
    </$.SpotGenerator>
  );
};

export default SpotGenerator;
