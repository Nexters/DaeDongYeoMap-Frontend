import { gql } from '@apollo/client';
import client from '../client';

const CREATE_SPOT = gql`
  mutation createSpot($createSpotInput: CreateSpotInput!) {
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
  place: GQL.Place & { __typename?: string },
  emojiId: string,
  x: number,
  y: number
): Promise<GQL.CreateSpot.Data> => {
  const placeData = { ...place };

  delete placeData.__typename;

  const response = await client.mutate({
    mutation: CREATE_SPOT,
    variables: {
      createSpotInput: { ...placeData, x, y, emoji: 'happy' },
    },
  });

  console.log(emojiId);

  return response?.data?.createSpot;
};

export default createSpot;
