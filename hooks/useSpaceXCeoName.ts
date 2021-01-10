import { gql, useQuery } from '@apollo/client';

const GET_SPACEX_CEO_NAME = gql`
  query GetSpaceXCeoName {
    company {
      ceo
    }
  }
`;

const useSpaceXCeoName: CustomQueryHook<string> = () => {
  const { loading, error, data } = useQuery<GQL.GetSpaceXCeoName.Data>(
    GET_SPACEX_CEO_NAME
  );

  return {
    loading,
    error,
    data: !loading && !error && data.company.ceo,
  };
};

export default useSpaceXCeoName;
