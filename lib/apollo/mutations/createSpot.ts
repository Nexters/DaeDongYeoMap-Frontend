import { gql } from '@apollo/client';
import client from '../client';

const CREATE_SPOT = gql`
  query createSpot($createSpotInput: CreateSpotInput!) {
    createSpot(createSpotInput: $createSpotInput) {
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

const createSpot = async (
  place: GQL.Place,
  emojiId: string
): Promise<GQL.CreateSpot.Data> => {
  const response = await client.mutate({
    mutation: CREATE_SPOT,
    variables: {
      createSpotInput: place,
    },
  });

  console.log(emojiId);

  return response?.data?.createSpot;
};

export default createSpot;
