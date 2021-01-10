import useSpaceXCeoName from '../hooks/useSpaceXCeoName';

const ApolloQueryDummy: React.FC = () => {
  const { loading, error, data: spaceXCeoName } = useSpaceXCeoName();
  const text: string = loading
    ? '로딩 중...'
    : error
    ? '에러 발생!'
    : spaceXCeoName;

  return <p>Apollo Query Dummy: {text}</p>;
};

export default ApolloQueryDummy;
