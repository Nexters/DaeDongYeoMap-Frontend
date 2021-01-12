import { gql, useLazyQuery } from '@apollo/client';
import { useRecoilState } from 'recoil';
import { messageState } from '../states';

const GET_SPACEX_CEO = gql`
  query GetSpaceXCEO {
    company {
      ceo
    }
  }
`;

const useSpaceXCEOFetcher: CustomLazyQueryHook<string> = () => {
  const [_, setMessage] = useRecoilState(messageState);
  const [fetch, { loading, error, data }] = useLazyQuery<GQL.GetSpaceXCEO.Data>(
    GET_SPACEX_CEO
  );

  if (error) {
    setMessage('에러가 발생했습니다');
  } else if (loading) {
    setMessage('로딩 중 입니다');
  } else if (data) {
    setMessage(`SpaceX CEO 이름은 ${data.company.ceo} 입니다`);
  }

  return [
    fetch,
    {
      loading,
      error,
      data: !loading && !error && data?.company?.ceo,
    },
  ];
};

export default useSpaceXCEOFetcher;
