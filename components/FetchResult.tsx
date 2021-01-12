import { useRecoilValue } from 'recoil';
import { decoratedMessageState } from '../states';

const FetchResult: React.FC = () => {
  const message: string = useRecoilValue(decoratedMessageState);

  return <p>{message}</p>;
};

export default FetchResult;
