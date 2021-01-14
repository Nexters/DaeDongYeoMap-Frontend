import { useRecoilValue } from 'recoil';
import Title from './Title';
import PageSticker from './PageSticker';
import PageForm from './PageForm';
import { pageState } from './SpotGeneratorState';
import * as $ from './SpotGeneratorView';

const SpotGenerator: React.FC = () => {
  const page = useRecoilValue(pageState);

  return (
    <$.SpotGenerator>
      <Title />
      {page === 2 ? <PageForm /> : <PageSticker />}
    </$.SpotGenerator>
  );
};

export default SpotGenerator;
