import { gql } from '@apollo/client';
import client from '../client';

const PLACES_BY_KEYWORD = gql`
  query placesByKeyword($query: String!) {
    placesByKeyword(filters: { query: $query }) {
      id
      place_name
      x
      y
    }
  }
`;

const placesByKeyword = async (query: string): Promise<GQL.GetPlace.Data> => {
  console.log('??????');
  const response = await client.query({
    fetchPolicy: 'cache-first',
    query: PLACES_BY_KEYWORD,
    variables: {
      query,
    },
  });
  console.log(response, '1111111');
  return response?.data?.placesByKeyworld;
};

export default placesByKeyword;
