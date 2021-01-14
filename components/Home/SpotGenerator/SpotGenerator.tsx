import Title from './Title';
import PageSticker from './PageSticker';
import * as $ from './SpotGeneratorView';

const SpotGenerator: React.FC = () => {
  return (
    <$.SpotGenerator>
      <Title />
      <PageSticker />
    </$.SpotGenerator>
  );
};

export default SpotGenerator;
