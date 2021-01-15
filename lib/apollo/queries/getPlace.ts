import { gql } from '@apollo/client';
import client from '../client';

const GET_PLACE = gql`
  query getPlace($placeId: String!) {
    getPlace(placeId: $placeId) {
      id
      place_name
      category_name
      category_group_code
      category_group_name
      phone
      address_name
      road_address_name
      place_url
      distance
      x
      y
    }
  }
`;

const getPlace = async (placeId: string): Promise<GQL.GetPlace.Data> => {
  const response = await client.query({
    fetchPolicy: 'cache-first',
    query: GET_PLACE,
    variables: {
      placeId,
    },
  });
  const place = response?.data?.getPlace;

  return place;
};

export default getPlace;
