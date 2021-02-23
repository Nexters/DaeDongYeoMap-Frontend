import { makeVar, gql, useMutation } from '@apollo/client';
import sugar, { parseStickerId } from '~/constants/sugar';
import Storage from '~/lib/storage';
import createReactiveVarHooks from '~/util/createReactiveVarHooks';
import type { Sugar } from '~/constants/sugar';
import type { Props as SpotGeneratorProps } from './SpotGenerator';

type FormSugarState = Sugar;
type FormStickerState = string;
type FormPartnerState = string;
type FormDateState = [number, number, number];
type FormResetter = () => void;

const formSugarState = makeVar<FormSugarState>('sugar100');
const formStickerState = makeVar<FormStickerState>(
  sugar.sugar100.stickers[0].id
);
const formPartnerState = makeVar<FormPartnerState>(null);
const formDateState = makeVar<FormDateState>(null);

export const [
  useFormSugar,
  useFormSugarSetter,
  useFormSugarState,
] = createReactiveVarHooks(formSugarState);

export const [
  useFormSticker,
  useFormStickerSetter,
  useFormStickerState,
] = createReactiveVarHooks(formStickerState);

export const [
  useFormPartner,
  useFormPartnerSetter,
  useFormPartnerState,
] = createReactiveVarHooks(formPartnerState);

export const [
  useFormDate,
  useFormDateSetter,
  useFormDateState,
] = createReactiveVarHooks(formDateState);

export const useFormResetter = (): FormResetter => {
  const resetForm: FormResetter = () => {
    formSugarState('sugar100');
    formStickerState(sugar.sugar100.stickers[0].id);
    formPartnerState(null);
    formDateState(null);
  };

  return resetForm;
};

export type CreateSticker = (place: {
  id: string;
  name: string;
  x: number;
  y: number;
}) => void;

export const CREATE_STICKER = gql`
  mutation CreateSticker($createStickerInput: CreateStickerInput!) {
    createSticker(createStickerInput: $createStickerInput) {
      _id
      sticker_index
      sweet_percent
      is_used
      spot(populate: true) {
        place_name
      }
    }
  }
`;

export const useCreateSticker = (): CreateSticker => {
  let partner: string = formPartnerState() || '';
  let stickerId: string = formStickerState();

  const [request] = useMutation<
    GQL.CreateSticker.Data,
    GQL.CreateSticker.Variables
  >(CREATE_STICKER, {
    onCompleted({ createSticker: data }) {
      const stickerCard = {
        id: data._id,
        stickerId,
        title: data.spot.place_name,
        partner,
        timestamp: Math.floor(Date.now() / 1000),
      };

      Storage.addStickerCard(stickerCard);
    },
  });

  const createSticker: CreateSticker = (place: SpotGeneratorProps['place']) => {
    stickerId = formStickerState();

    const [sweetPercent, stickerIndex] = parseStickerId(stickerId);

    partner = formPartnerState();
    request({
      variables: {
        createStickerInput: {
          place_id: place.id,
          place_name: place.name,
          x: place.x,
          y: place.y,
          sticker_index: stickerIndex,
          sweet_percent: sweetPercent,
        },
      },
    });
  };

  return createSticker;
};
