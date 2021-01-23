import { gql } from '@apollo/client';
import client from '../client';

const PLACES_AND_SPOTS_BY_KEYWORD = gql`
  query placesByKeyword($query: String!) {
    getPlacesByKeyword(filters: { query: $query }) {
      id
      place_name
      x
      y
    }
    getSpotsByKeyword(keyword: $query) {
      id
      place_name
      x
      y
    }
  }
`;

const placesAndSpotsByKeyword = async (
  query: string
): Promise<GQL.GetPlacesAndSpots.Data> => {
  console.log('??????');
  const response = await client.query({
    fetchPolicy: 'cache-first',
    query: PLACES_AND_SPOTS_BY_KEYWORD,
    variables: {
      query,
    },
  });
  console.log(response, '1111111');
  if (response?.data) {
    return {
      places: response.data.getPlacesByKeyword,
      spots: response.data.getSpotsByKeyword,
    };
  }
  return { places: [], spots: [] };
};

export default placesAndSpotsByKeyword;
