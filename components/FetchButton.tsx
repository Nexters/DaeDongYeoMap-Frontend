import useSpaceXCEOFetcher from '../hooks/useSpaceXCEOFetcher';

const FetchButton: React.FC = () => {
  const [fetch] = useSpaceXCEOFetcher();

  return (
    <button type="button" onClick={fetch}>
      SpaceX CEO 이름 가져오기
    </button>
  );
};

export default FetchButton;
